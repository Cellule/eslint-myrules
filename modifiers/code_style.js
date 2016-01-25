var codependency = require("codependency");
var requirePeer = codependency.register(module);
requirePeer("eslint-plugin-babel");

module.exports = {
  "plugins": [
    "babel"
  ],
  "rules": {
    "array-bracket-spacing": [2, "never"],
    "babel/object-curly-spacing": [2, "never"],
    "block-spacing": [2, "never"],
    "brace-style": [2, "1tbs", {"allowSingleLine": true}],
    "comma-style": [2, "last"],
    "computed-property-spacing": [2, "never"],
    "dot-location": [2, "property"],
    "max-len": [1, 120, 2, {"ignoreComments": true, "ignoreUrls": true, "ignorePattern": "([\"`]).{30,}\\1.{0,4}\n?$"}],
    "no-floating-decimal": 2,
    "no-multiple-empty-lines": [2, {"max": 2}],
    "no-nested-ternary": 2,
    "no-spaced-func": 2,
    "no-useless-concat": 2,
    "operator-linebreak": 2,
    "padded-blocks": [2, "never"],
    "space-before-blocks": [2, "always"],
    "space-in-parens": [2, "never"],
    "space-infix-ops": 2,
    "spaced-comment": [2, "always", {"exceptions": ["/"]}]
  }
}