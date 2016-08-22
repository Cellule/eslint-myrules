# eslint-config-cellule
This is a set of rules and configuration for eslint using [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs).

## Installation

```bash
$ npm install --save-dev eslint@~3.3.0 eslint-config-cellule
```

## Usage
In your `.eslintrc` config, extends to this module with

```js
{
  "extends": ["cellule"]
}
```

### Available config files
- `"cellule/global.js"`: Default config (ie: `extends: "cellule"`). This contains mostly rules to prevent errors and covers best practices.
- `"cellule/frontend.js"`: Config for files targeted for the browser.
- `"cellule/babel.js"`: Config for when you use [babel](http://babeljs.io/) to compile your sources.
  - [babel-eslint](https://github.com/babel/babel-eslint): Parser supporting extended language features
  - [eslint-plugin-babel](https://github.com/babel/eslint-plugin-babel): An eslint plugin companion to babel-eslint
- `"cellule/chakra.js"`: Config when your host is `ch.exe` for [ChakraCore](https://github.com/Microsoft/ChakraCore).
- `"cellule/codestyle.js"`: Config covering mostly code style preferences.
- `"cellule/es2015.js"`: Config when your host supports es2015 without [babel](http://babeljs.io/).
- `"cellule/node.js"`: Config targeting node environment.
  - [eslint-plguin-node](https://github.com/mysticatea/eslint-plugin-node): Additional ESLint's rules for Node.js
- `"cellule/flow.js"`: Config when using [flow](http://flowtype.org/).
  - [babel-eslint](https://github.com/babel/babel-eslint): Parser supporting extended language features
  - [eslint-plugin-flowtype](https://github.com/gajus/eslint-plugin-flowtype): An eslint plugin that makes flow type annotations global variables and marks declarations as used
- `"cellule/react.js"`: Config when you use [React](https://facebook.github.io/react/) in your sources.
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react): React specific linting rules for ESLint

### Recommended order
In eslint Shareable Config the order in which you placed your `extends` impacts what will take precedence.
Here's a recommended order for this package of rules. (You will rarely if ever need all of them in one project)

```js
{
  "extends": [
    "cellule/global.js",
    "cellule/frontend.js",
    "cellule/node.js",
    "cellule/chakra.js",
    "cellule/codestyle.js",
    "cellule/es2015.js",
    "cellule/babel.js",
    "cellule/react.js",
    "cellule/flow.js"
  ]
}
```
