var codependency = require("codependency");
var requirePeer = codependency.register(module);
requirePeer("babel-eslint");
requirePeer("eslint-plugin-babel");

module.exports = {
  "parser": "babel-eslint",
  "plugins": [
    "babel"
  ],
  "rules": {
    "arrow-spacing": 2,
    "babel/generator-star-spacing": [2, "after"],
    "babel/new-cap": 2,
    "comma-dangle": 0,
    "constructor-super": 2,
    "new-cap": 0,
    "no-class-assign": 2,
    "no-const-assign": 2,
    "no-dupe-class-members": 2,
    "no-invalid-this": 1,
    "no-loop-func": 0,
    "no-mixed-requires": 2,
    "no-multi-spaces": [2, {}],
    "no-param-reassign": 2,
    "no-this-before-super": 2,
    "no-var": 2,
    "prefer-arrow-callback": 1,
    "prefer-const": 2,
    "prefer-reflect": 1,
    "prefer-spread": 2,
    "prefer-template": 1,
    "require-yield": 2,
    "strict": [2, "never"],
  },
  "ecmaFeatures": {
    // The features are not used when using babel-eslint, however, if the parser
    // is disabled, we would like to keep ES2015 features.
    "arrowFunctions": true,
    "binaryLiterals": true,
    "blockBindings": true,
    "classes": true,
    "defaultParams": true,
    "destructuring": true,
    "forOf": true,
    "generators": true,
    "modules": true,
    "objectLiteralComputedProperties": true,
    "objectLiteralDuplicateProperties": true,
    "objectLiteralShorthandMethods": true,
    "objectLiteralShorthandProperties": true,
    "octalLiterals": true,
    "regexUFlag": true,
    "regexYFlag": true,
    "restParams": true,
    "spread": true,
    "superInFunctions": true,
    "templateStrings": true,
    "unicodeCodePointEscapes": true,
    "globalReturn": true
  },
}