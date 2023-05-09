import { Linter } from "eslint";

const config: Linter.Config = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: [
    "plugin:react/recommended",
    "standard",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "prettier", "jest", "import", "@typescript-eslint"],
  rules: {
    "prettier/prettier": "error",
    "jest/consistent-test-it": ["error", { fn: "test" }],
    "jest/require-top-level-describe": ["error"],
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
        "alphabetize": { "order": "asc", "caseInsensitive": true },
      },
    ],
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
  },
};

export default config;
