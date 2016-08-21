require("./monkeyPatch").addPlugins(["flow-vars"]);

module.exports = {
  "parser": require.resolve("babel-eslint"),
  "plugins": [
    "flow-vars"
  ],
  "rules": {
    "flow-vars/define-flow-type": 1,
    "flow-vars/use-flow-type": 1
  }
}
