// var jsEngine = process.jsEngine || "v8";
// var engineVersion = process.versions[jsEngine];
// var reg = /^(\d+)\.(\d+)\.(\d+)(\.(\d+))?$/;
// var match = reg.match(engineVersion);

// Enable everything for the time being
// Todo:: Activate features according to the engine version (current node or use info in package.json to determine target engine)
module.exports = {
  "rules": {
    "arrow-body-style": [2, "as-needed"], // require braces in arrow function body
    "arrow-parens": 0, // require parens in arrow function arguments
    "arrow-spacing": 2, // require space before/after arrow function's arrow
    "constructor-super": 2, // verify calls of super() in constructors
    "generator-star-spacing": [2, {"before": false, "after": true}], // enforce spacing around the * in generator functions
    "no-arrow-condition": 1, // disallow arrow functions where a condition is expected
    "no-class-assign": 2, // disallow modifying variables of class declarations
    "no-const-assign": 2, // disallow modifying variables that are declared using const
    "no-dupe-class-members": 2, // disallow duplicate name in class member
    "no-this-before-super": 2, // disallow use of this/super before calling super() in constructors.
    "no-var": 1, // require let or const instead of var
    "object-shorthand": 1, // require method and property shorthand syntax for object literals
    "prefer-arrow-callback": 1, // suggest using arrow functions as callbacks
    "prefer-const": 2, // suggest using const declaration for variables that are never modified after declared
    "prefer-reflect": 1, // suggest using Reflect methods where applicable
    "prefer-spread": 2, // suggest using the spread operator instead of .apply().
    "prefer-template": 1, // suggest using template literals instead of strings concatenation
    "require-yield": 2, // disallow generator functions that do not have yield
  },
  "ecmaFeatures": {
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
};
