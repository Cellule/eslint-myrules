module.exports = {
  "env": {
    "node": true
  },
  "globals": {},
  "plugins": [],
  "rules": {
    /*
     * Mandatory Code style rules.
     */

    "camelcase": [1, {"properties": "never"}],
    // If working with es2015 this will be overriden to disable the rule
    "comma-dangle": [2, "never"],
    "comma-spacing": 2,
    "consistent-this": [0, "self"],
    "curly": [2, "all"],
    "dot-notation": 2,
    "eol-last": 2,
    "indent": [2, 2, {"SwitchCase": 1, "VariableDeclarator": 2}],
    "key-spacing": 2,
    "no-lone-blocks": 2,
    "semi": 2,
    "semi-spacing": 0, // This causes too much conflict with other spacing rules
    "space-infix-ops": 2,
    "space-return-throw-case": 2,
    "space-unary-ops": 2,

    // Allow multi spaces for variable declaration (alignement)
    "no-multi-spaces": [2, {"exceptions": {"VariableDeclarator": true}}],
    "no-multi-str": 2,
    "no-spaced-func": 2,
    "no-trailing-spaces": 2,
    "no-undef-init": 2,
    "no-unneeded-ternary": 2,
    "no-useless-call": 2,
    "quotes": 2,

    /*
     * Rules to help finding possible errors.
     */

    "callback-return": 2,
    "eqeqeq": 2,
    "guard-for-in": 2,
    "max-depth": [1, 15],
    "max-nested-callbacks": [1, 5],
    "max-params": [1, 8],
    "new-cap": 2,
    "new-parens": 2,
    "no-alert": 2,
    "no-array-constructor": 2,
    "no-caller": 2,
    "no-catch-shadow": 2,

    "no-else-return": 2,
    "no-empty-label": 2,
    "no-eq-null": 2,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-extra-parens": [2, "functions"],
    "no-implied-eval": 2,
    "no-iterator": 2,
    "no-label-var": 2,
    "no-labels": 2,
    "no-lonely-if": 2,
    "no-loop-func": 2,
    "no-native-reassign": 2,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-object": 2,
    "no-new-wrappers": 2,
    "no-proto": 2,
    "no-return-assign": 2,
    "no-script-url": 2,
    "no-sequences": 2,
    "no-shadow": [2, {
      "hoist": "functions",
      "allow": [
        "err",
        "next",
        "callback",
        "cb",
        "res",
        "result",
        "response"
      ]
    }],
    "no-shadow-restricted-names": 2,
    "no-octal-escape": 2,
    "no-self-compare": 2,
    "no-throw-literal": 2,
    "no-unexpected-multiline": 2,
    "no-unused-expressions": 2,
    "no-unused-vars": [2, {"args": "after-used"}],
    "no-use-before-define": [2, "nofunc"],
    "no-with": 2,
    "valid-jsdoc": [2, {
        "prefer": {"returns": "return"},
        "requireReturn": false
    }],
    "wrap-iife": [2, "outside"],
    "yoda": [2, "never", {"exceptRange": true}],
  }
}