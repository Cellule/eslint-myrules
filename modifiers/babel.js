
module.exports = {
  "parser": "babel-eslint",
  "plugins": [
    "babel"
  ],
  "rules": {
    "babel/object-curly-spacing": [2, "never"],
    "babel/generator-star-spacing": [2, "after"],
    "babel/no-await-in-loop": 2,
    "babel/new-cap": 2,

    "generator-star-spacing": 0, // enforce spacing around the * in generator functions
    "new-cap": 0,
    "no-param-reassign": 2, // disallow reassignment of function parameters // use default value if needed
    "strict": [2, "never"],
  }
};
