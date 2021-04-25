# @dkimura/eslint-config

## Install

```bash
npm i eslint @dkimura/eslint-config -D
```

or

```bash
yarn add eslint @dkimura/eslint-config -D
```

## Usage

```javascript
module.exports = {
  extends: ['@dkimura'],
  parserOptions: {
    project: './tsconfig.json',
  },
  // Customize your config
  // ...
}
```
