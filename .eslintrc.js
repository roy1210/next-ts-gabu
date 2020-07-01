module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "plugin:react/recommended",
  ],
  plugins: ["@typescript-eslint", "react-hooks", "react"],
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    node: true,
    es6: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "@typescript-eslint/ban-ts-ignore": ["off"],
    "react/react-in-jsx-scope": ["off"],
    "@typescript-eslint/no-non-null-assertion": ["off"],
    "@typescript-eslint/explicit-function-return-type": ["off"],
    "@typescript-eslint/no-empty-interface": ["warn"],
    "@typescript-eslint/interface-name-prefix": ["warn"],
    "@typescript-eslint/camelcase": ["warn"],
    "no-case-declarations": ["warn"],
    "react/jsx-uses-react": ["warn"],
    "react/jsx-uses-vars": ["warn"],
    "prettier/prettier": ["warn"],
  },
};
