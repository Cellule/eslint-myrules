require("./monkeyPatch").addPlugins(["node"]);

module.exports = {
  plugins: ["node"],
  extends: [require.resolve("eslint-plugin-node/conf/recommended.json")],
  "env": {
    "node": true
  },
  "rules": {
    "node/no-missing-import": 2,
    "node/no-unsupported-features": 0,
    /*
     * Node.js and CommonJS
     * These rules are specific to JavaScript running on Node.js or using CommonJS in the browser.
     */
    "callback-return": 2, // enforce return after a callback
    "global-require": 0, // enforce require() on top-level module scope
    "handle-callback-err": 2, // enforce error handling in callbacks
    "no-mixed-requires": 1, // disallow mixing regular variable and require declarations
    "no-new-require": 2, // disallow use of new operator with the require function
    "no-path-concat": 2, // disallow string concatenation with __dirname and __filename
    "no-process-env": 0, // disallow use of process.env
    "no-process-exit": 1, // disallow process.exit()
    "no-restricted-modules": 0, // restrict usage of specified node modules
    "no-sync": 0, // disallow use of synchronous methods
  }
};
