// Some rules to cover some specifics about ch.exe (ChakraCore host)
module.exports = {
  "env": {
    "node": false
  },
  "globals": {
    "WScript": false,
    "print": false
  },
  "rules": {
    "no-console": 2
  }
};
