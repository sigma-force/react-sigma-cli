const defaultPackage = {
  name: "",
  version: "1.0.0",
  description: "",
  main: "index.js",
  scripts: {
    build: "webpack --mode production",
    start: "webpack-dev-server --open --mode development",
    format: "prettier --write '{*.js,src/**/*.{js,jsx}}'",
    lint: "eslint src/ --fix"
  },
  keywords: ["react", "webpack"],
  license: "ISC",
  dependencies: {
    "@babel/core": "^7.9.0",
    "@babel/preset-env": "^7.9.5",
    "@babel/preset-react": "^7.9.4",
    "babel-loader": "^8.1.0",
    "file-loader": "^5.1.0",
    "html-loader": "^0.5.5",
    "html-webpack-plugin": "^3.2.0",
    react: "^16.13.1",
    "react-dom": "^16.13.1",
    webpack: "^4.42.1",
    "webpack-cli": "^3.3.11",
    "webpack-dev-server": "^3.10.3"
  },
  devDependencies: {
    "babel-eslint": "^10.0.3",
    "css-loader": "^3.5.2",
    eslint: "^5.16.0",
    "eslint-config-airbnb": "^17.1.1",
    "eslint-config-prettier": "^4.3.0",
    "eslint-plugin-import": "^2.20.2",
    "eslint-plugin-jsx-a11y": "^6.2.3",
    "eslint-plugin-prettier": "^3.1.3",
    "eslint-plugin-react": "^7.19.0",
    husky: "^2.7.0",
    "lint-staged": "^8.2.1",
    "mini-css-extract-plugin": "^0.7.0",
    prettier: "^1.19.1",
    "style-loader": "^0.23.1",
    stylus: "^0.54.7",
    "stylus-loader": "^3.0.2"
  },
  husky: {
    hooks: {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,jsx}": ["npm run format", "npm run lint", "git add"]
  }
};

export default defaultPackage;
