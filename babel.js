require("./monkeyPatch").addPlugins(["babel"]);

module.exports = {
  "parser": require.resolve("babel-eslint"),
  "plugins": [
    "babel"
  ],
  "rules": {
    "babel/array-bracket-spacing": [2, "never"],
    "babel/generator-star-spacing": [2, "after"],
    "babel/new-cap": 2,
    "babel/no-await-in-loop": 0,
    "babel/object-curly-spacing": [2, "never"],
    "babel/object-shorthand": 1,

    "array-bracket-spacing": 0,
    "generator-star-spacing": 0, // enforce spacing around the * in generator functions
    "new-cap": 0,
    "no-param-reassign": 2, // disallow reassignment of function parameters // use default value if needed
    "object-shorthand": 0,
    "strict": [2, "never"],
  }
};
