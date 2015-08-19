var path = require("path");
var modifiers = require("./modifiers");

module.exports = {
  targetsPath: {
    global: path.resolve(__dirname, "rules", "global.eslintrc"),
    frontend: path.resolve(__dirname, "rules", "frontend.eslintrc")
  },
  modifiers: {
    frontend: {
      react: modifiers.react,
    },
    global: {
      "es2015": modifiers.es2015,
      "jshost": modifiers.jshost,
      "no-code-style": modifiers.codeStyle
    }
  },
  defaultConfig: {
    modifiers: {
      es2015: true,
      jshost: false,
      react: true,
      "no-code-style": false
    }
  }
};
