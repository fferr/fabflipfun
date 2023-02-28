module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: ["airbnb", "plugin:react/recommended", "plugin:react-hooks/recommended", "prettier", "prettier/react"],
  plugins: ["react", "import", "jsx-a11y", "react-hooks", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
  },
  parser: "babel-eslint",
  settings: {
    react: {
      version: "detect",
    },
  },
};
