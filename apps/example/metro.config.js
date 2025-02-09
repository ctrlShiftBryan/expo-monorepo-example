// Learn more https://docs.expo.dev/guides/monorepos
const { getDefaultConfig } = require('expo/metro-config');
const { FileStore } = require('metro-cache');
const { withNativeWind } = require('nativewind/metro');
const path = require('path');
const fs = require('fs');

// Create the default Expo config for Metro
const config = getDefaultConfig(__dirname);

const projectRoot = __dirname;
const workspaceRoot = path.resolve(__dirname, '../..');

// Define workspace packages that can use the ~ alias
const workspacePackages = [
  'packages/ui',
  'packages/feature-home',
  // Add more packages here as needed
];

// Add workspace packages to watch
config.watchFolders = [workspaceRoot];

// Configure module resolution
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];

// Configure path alias resolution
config.resolver.resolveRequest = (context, moduleName, platform) => {
  // Handle ~ aliases
  if (moduleName.startsWith('~/')) {
    // Remove the ~ prefix
    const relativePath = moduleName.substr(2);

    // Try to resolve from each workspace package
    for (const pkg of workspacePackages) {
      const pkgPath = path.resolve(workspaceRoot, pkg, relativePath);
      if (fs.existsSync(pkgPath)) {
        return {
          filePath: pkgPath,
          type: 'sourceFile',
        };
      }

      // Also try with .tsx extension
      const pkgPathWithExt = path.resolve(workspaceRoot, pkg, `${relativePath}.tsx`);
      if (fs.existsSync(pkgPathWithExt)) {
        return {
          filePath: pkgPathWithExt,
          type: 'sourceFile',
        };
      }
    }

    // If not found in any package, try to resolve from the requesting file's location
    const requestingDir = path.dirname(context.originModulePath);
    const localPath = path.resolve(requestingDir, relativePath);
    if (fs.existsSync(localPath)) {
      return {
        filePath: localPath,
        type: 'sourceFile',
      };
    }

    // Also try with .tsx extension for local path
    const localPathWithExt = `${localPath}.tsx`;
    if (fs.existsSync(localPathWithExt)) {
      return {
        filePath: localPathWithExt,
        type: 'sourceFile',
      };
    }
  }

  // Fall back to default resolution for other cases
  return context.resolveRequest(context, moduleName, platform);
};

// Use turborepo to restore the cache when possible
config.cacheStores = [
  new FileStore({ root: path.join(__dirname, 'node_modules', '.cache', 'metro') }),
];

module.exports = withNativeWind(config, { input: './global.css' });
