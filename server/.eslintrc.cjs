module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "standard-with-typescript",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs,ts}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "@typescript-eslint/quotes": ["error", "double"],
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/comma-dangle": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
  },
};
