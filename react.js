require("./monkeyPatch").addPlugins(["react"]);

module.exports = {
  "plugins": [
    "react"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    // Rules for React components

    // JSX takes care of that
    "react/display-name": [1, {"acceptTranspilerName": true}],
    "react/jsx-boolean-value": 1,
    "react/jsx-closing-bracket-location": [1, "tag-aligned"],
    "react/jsx-curly-spacing": 1,
    "react/jsx-indent-props": [1, 2],
    "react/jsx-no-duplicate-props": 1,
    "react/jsx-no-undef": 1,
    "jsx-quotes": [2, "prefer-double"],
    "react/jsx-max-props-per-line": 0,
    "react/jsx-no-literals": 0,
    "react/jsx-sort-prop-types": [1, {"ignoreCase": true}],
    "react/jsx-sort-props": 0,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/no-did-mount-set-state": 1,
    "react/no-did-update-set-state": 1,
    // Allow to have more than 1 component per file, left at the discretion of
    // the developper
    "react/no-multi-comp": 0,
    "react/no-unknown-property": 1,
    "react/prop-types": 1,
    "react/react-in-jsx-scope": 1,
    "react/require-extension": [1, {"extensions": [".js", ".jsx"]}],
    "react/self-closing-comp": 1,
    "react/sort-comp": [1, {
      "order": [
        "definition",
        "lifecycle",
        "/^on.+$/",
        "everything-else",
        "rendering",
      ],
      "groups": {
        "definition": [
          "displayName",
          "propTypes",
          "contextTypes",
          "childContextTypes",
          "mixins",
          "statics",
          "defaultProps",
          "state",
          "constructor",
        ],
        "lifecycle": [
          "getDefaultProps",
          "getInitialState",
          "getChildContext",
          "componentWillMount",
          "componentDidMount",
          "componentWillReceiveProps",
          "shouldComponentUpdate",
          "componentWillUpdate",
          "componentDidUpdate",
          "componentWillUnmount"
        ],
        "rendering": [
          "/^render.+$/",
          "render"
        ]
      }
    }],
    "react/wrap-multilines": 1,

    // Allow nested ternary for JSX components
    "no-nested-ternary": 0,
    "no-inner-declarations": 1,
  }
};
