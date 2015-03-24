# eslint-myrules
Plugin for [eslint-myrules-manage](https://github.com/Cellule/eslint-myrules-manager)

## Configuration
- Fork this project.
- edit `index.js`, `rules/*.eslintrc` and `modifiers` however you like.
- `npm install` your git repo in the projects you want your rules.

## Installation

```bash
$ npm install cellule/eslint-myrules --save-dev
```

## Details
- Targets: `global`, `frontend` and `backend`
- Modifiers: see [modifiers](modifiers/MODIFIERS.md)
- Uses [babel-eslint](https://github.com/babel/babel-eslint) for parsing.
- Optionnal plugin for [react](https://github.com/yannickcr/eslint-plugin-react)
- plugin [shadow-exception](https://github.com/Cellule/eslint-plugin-shadow-exception) to allow exceptions for [no-shadow](http://eslint.org/docs/rules/no-shadow.html) rule

