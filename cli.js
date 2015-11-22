#!/usr/bin/env node
var res = require.resolve("eslint-myrules-manager");
if(res.indexOf("node_modules") === -1) {
  // If the manager is not in a node_modules, add this path to search for modules
  try {
    require("app-module-path").addPath(require("path").join(__dirname, "node_modules"));
    console.warn("Development mode");
  } catch(e) {
    console.warn("Failed to add cellule-eslint-myrules path to node modules");
  }
}
var execute = require("eslint-myrules-manager").execute;
var myRules = require("./index");

execute(myRules, process.argv);
