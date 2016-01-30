module.exports = {
  "rules": {
    /*
     * Possible Errors
     * The following rules point out areas where you might have made mistakes.
     */
    "comma-dangle": 0, // disallow or enforce trailing commas
    "no-cond-assign": 2, // disallow assignment in conditional expressions
    "no-console": 0, // disallow use of console in the node environment
    "no-constant-condition": 2, // disallow use of constant expressions in conditions
    "no-control-regex": 2, // disallow control characters in regular expressions
    "no-debugger": 2, // disallow use of debugger
    "no-dupe-args": 2, // disallow duplicate arguments in functions
    "no-dupe-keys": 2, // disallow duplicate keys when creating object literals
    "no-duplicate-case": 2, // disallow a duplicate case label.
    "no-empty": 2, // disallow empty statements
    "no-empty-character-class": 2, // disallow the use of empty character classes in regular expressions
    "no-ex-assign": 2, // disallow assigning to the exception in a catch block
    "no-extra-boolean-cast": 2, // disallow double-negation boolean casts in a boolean context
    "no-extra-parens": [2, "functions"], // disallow unnecessary parentheses: only for function declarations
    "no-extra-semi": 2, // disallow unnecessary semicolons
    "no-func-assign": 2, // disallow overwriting functions written as function declarations
    "no-inner-declarations": 2, // disallow function or variable declarations in nested blocks
    "no-invalid-regexp": 2, // disallow invalid regular expression strings in the RegExp constructor
    "no-irregular-whitespace": 2, // disallow irregular whitespace outside of strings and comments
    "no-negated-in-lhs": 2, // disallow negation of the left operand of an in expression
    "no-obj-calls": 2, // disallow the use of object properties of the global object (Math and JSON) as functions
    "no-regex-spaces": 2, // disallow multiple spaces in a regular expression literal
    "no-sparse-arrays": 2, // disallow sparse arrays
    "no-unexpected-multiline": 2, // Avoid code that looks like two expressions but is actually one
    "no-unreachable": 2, // disallow unreachable statements after a return, throw, continue, or break statement
    "use-isnan": 2, // disallow comparisons with the value NaN
    "valid-jsdoc": [2, {"prefer": {"returns": "return"}, "requireReturn": false}], // Ensure JSDoc comments are valid
    "valid-typeof": 2, // Ensure that the results of typeof are compared against a valid string

    /*
     * Best Practices
     * These are rules designed to prevent you from making mistakes. They either prescribe a better way of doing something or help you avoid footguns.
     */
    "accessor-pairs": 0, // Enforces getter/setter pairs in objects
    "block-scoped-var": 0, // treat var statements as if they were block scoped
    "complexity": 0, // specify the maximum cyclomatic complexity allowed in a program
    "consistent-return": 0, // require return statements to either always or never specify values
    "curly": [2, "all"], // specify curly brace conventions for all control statements
    "default-case": 0, // require default case in switch statements
    "dot-location": [2, "property"], // enforces consistent newlines before or after dots
    "dot-notation": 2, // encourages use of dot notation whenever possible
    "eqeqeq": 2, // require the use of === and !==
    "guard-for-in": 2, // make sure for-in loops have an if statement
    "no-alert": 2, // disallow the use of alert, confirm, and prompt
    "no-caller": 2, //  disallow use of arguments.caller or arguments.callee
    "no-case-declarations": 2, // disallow lexical declarations in case clauses
    "no-div-regex": 2, // disallow division operators explicitly at beginning of regular expression
    "no-else-return": 2, // disallow else after a return in an if
    "no-empty-label": 2, // disallow use of labels for anything other than loops and switches
    "no-empty-pattern": 2, // disallow use of empty destructuring patterns
    "no-eq-null": 2, // disallow comparisons to null without a type-checking operator
    "no-eval": 2, // disallow use of eval()
    "no-extend-native": 2, // disallow adding to native types
    "no-extra-bind": 2, // disallow unnecessary function binding
    "no-fallthrough": 2, // disallow fallthrough of case statements
    "no-floating-decimal": 2, // disallow the use of leading or trailing decimal points in numeric literals
    "no-implicit-coercion": 0, // disallow the type conversions with shorter notations
    "no-implied-eval": 2, // disallow use of eval()-like methods
    "no-invalid-this": 2, // disallow this keywords outside of classes or class-like objects
    "no-iterator": 2, // disallow usage of __iterator__ property
    "no-labels": 2, // disallow use of labeled statements
    "no-lone-blocks": 2, // disallow unnecessary nested blocks
    "no-loop-func": 2, // disallow creation of functions within loops
    "no-magic-numbers": 1, // disallow the use of magic numbers
    "no-multi-spaces": [2, {"exceptions": {"VariableDeclarator": true}}], // disallow use of multiple spaces // Allow multi spaces for variable declaration (alignement)
    "no-multi-str": 2, // disallow use of multiline strings
    "no-native-reassign": 2, // disallow reassignments of native objects
    "no-new": 2, // disallow use of the new operator when not part of an assignment or comparison
    "no-new-func": 2, // disallow use of new operator for Function object
    "no-new-wrappers": 2, // disallows creating new instances of String,Number, and Boolean
    "no-octal": 2, // disallow use of octal literals
    "no-octal-escape": 2, // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
    "no-param-reassign": 0, // disallow reassignment of function parameters // enabled in es2015
    "no-proto": 2, // disallow usage of __proto__ property
    "no-process-env": 1, // disallow use of process.env
    "no-redeclare": 2, // disallow declaring the same variable more than once
    "no-return-assign": 2, // disallow use of assignment in return statement
    "no-script-url": 2, // disallow use of javascript: urls.
    "no-self-compare": 2, // disallow comparisons where both sides are exactly the same
    "no-sequences": 2, // disallow use of the comma operator
    "no-throw-literal": 2, // restrict what can be thrown as an exception
    "no-unused-expressions": 2, // disallow usage of expressions in statement position
    "no-useless-call": 2, // disallow unnecessary .call() and .apply()
    "no-useless-concat": 2, // disallow unnecessary concatenation of literals or template literals
    "no-void": 2, // disallow use of the void operator
    "no-warning-comments": 1, // disallow usage of configurable warning terms in comments - e.g. TODO or FIXME
    "no-with": 2, // disallow use of the with statement
    "radix": 0, // require use of the second argument for parseInt()
    "vars-on-top": 0, // require declaration of all vars at the top of their containing scope
    "wrap-iife": [2, "outside"], // require immediate function invocation to be wrapped in parentheses
    "yoda": [2, "never", {"exceptRange": true}], // require or disallow Yoda conditions

    /*
     * Strict Mode
     * These rules relate to using strict mode.
     */
    "strict": 0, // controls location of Use Strict Directives

    /*
     * Variables
     * These rules have to do with variable declarations.
     */
    "init-declarations": 0, // enforce or disallow variable initializations at definition
    "no-catch-shadow": 2, // disallow the catch clause parameter name being the same as a variable in the outer scope
    "no-delete-var": 2, // disallow deletion of variables
    "no-label-var": 2, // disallow labels that share a name with a variable
    "no-shadow-restricted-names": 2, // disallow shadowing of names such as arguments
    "no-shadow": [2, {"hoist": "functions", "allow": ["err", "next", "callback", "cb", "res", "result", "response"]}], // disallow declaration of variables already declared in the outer scope
    "no-undef-init": 2, // disallow use of undefined when initializing variables
    "no-undef": 2, // disallow use of undeclared variables unless mentioned in a /*global */ block
    "no-undefined": 0, // disallow use of undefined variable
    "no-unused-vars": [2, {"args": "after-used"}], // disallow declaration of variables that are not used in the code
    "no-use-before-define": [2, "nofunc"], // disallow use of variables before they are defined

    /*
     * Stylistic Issues
     * These rules are purely matters of style and are quite subjective.
     */
  }
};
