module.exports = {
  extends: ['@acme/eslint-config'],
  ignorePatterns: [
    'node_modules',
    'build',
    '.expo',
    '.expo-shared'
  ],
  overrides: [
    {
      files: ['*.js'],
      env: {
        node: true
      }
    }
  ]
}; 
