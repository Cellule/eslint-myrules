# Deprecation
This project is no longer supported. Switched to Eslint [Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs).
See [eslint-config-cellule](https://www.npmjs.com/package/eslint-config-cellule) for continued support.

# eslint-myrules
Wrapper for [eslint-myrules-manager](https://github.com/Cellule/eslint-myrules-manager)

## Configuration
- Fork this project.
- edit `index.js`, `rules/*.eslintrc` and `modifiers` however you like.
- `npm install` your git repo in the projects you want your rules.

## Installation

```bash
$ npm install cellule/eslint-myrules --save-dev
```

## Usage
See [eslint-myrules-manager](https://github.com/Cellule/eslint-myrules-manager) for more details
```js
// package.json
{
  "script": {
    "lint": "eslint-myrules lint"
  }
}
```

## Details
- Targets: `global`, `frontend` and `backend`
- Modifiers: see [modifiers](modifiers/README.md)
- Uses [babel-eslint](https://github.com/babel/babel-eslint) for parsing.
- Optionnal plugin for [react](https://github.com/yannickcr/eslint-plugin-react)

