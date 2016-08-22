
// Overrides global rules for frontend
module.exports = {
  "env": {
    "browser": true
  },
  "globals": {
    "__DEV__": false,
    "__PROD__": false,
  },
  "rules": {
    "no-process-env": 1, // disallow use of process.env
  }
};
