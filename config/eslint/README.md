# @acme/eslint-config

Shared ESLint configuration for Acme projects.

## Usage

1. First, make sure your project's `package.json` includes the workspace dependency:

```json
{
  "devDependencies": {
    "@acme/eslint-config": "workspace:*"
  }
}
```

2. Create a `.eslintrc.js` file in your project:

```js
module.exports = {
  extends: ['@acme/eslint-config']
  // Add any project-specific overrides here
};
```

3. Add the following scripts to your project's `package.json`:

```json
{
  "scripts": {
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix"
  }
}
```

## Features

- TypeScript support
- React and React Hooks rules
- Sensible defaults for modern JavaScript/TypeScript development

## Extending

You can extend or override any rules in your project's `.eslintrc.js` file. For example:

```js
module.exports = {
  extends: ['@acme/eslint-config'],
  rules: {
    // Your custom rules here
    'no-console': 'error'
  }
};
``` 
