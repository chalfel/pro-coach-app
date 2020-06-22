module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "prettier",
    "import-helpers"
  ],
  "rules": {
    "prettier/prettier": "error",
    "indent": ["error", 2],
    "react/jsx-filename-extension": [
      "warn",
      {
        "extensions": [".jsx", ".js"]
      }
    ],
    "import/prefer-default-export": "off",
    "react/state-in-constructor": "off",
    "react/static-property-placement": "off",
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "no-param-reassign": "off",
    "no-console": "off",
    "import-helpers/order-imports": [
      "warn",
      {
        "newlinesBetween": "always", // new line between groups
        "groups": [
          "/^react/",
          "module",
          ["parent", "sibling", "index"],
        ],
        "alphabetize": { order: "asc", ignoreCase: true },
      },
    ],
  }
};