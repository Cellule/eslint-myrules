require("./monkeyPatch").addPlugins(["flowtype"]);

module.exports = {
  "parser": require.resolve("babel-eslint"),
  "plugins": [
    "flowtype"
  ],
  "rules": {
    "flowtype/define-flow-type": 1,
    "flowtype/require-parameter-type": 0,
    "flowtype/require-return-type": 0,
    "flowtype/require-valid-file-annotation": 2,
    "flowtype/space-after-type-colon": [2, "always"],
    "flowtype/space-before-type-colon": [2, "never"],
    "flowtype/type-id-match": 0,
    "flowtype/use-flow-type": 1,
    "flowtype/valid-syntax": 1
  },
  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": true
    }
  }
}
