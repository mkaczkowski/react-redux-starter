const path = require(`path`);

const PRODUCT_NAME = process.env.PRODUCT_NAME;

const root = `./../`;
module.exports = {
  root: path.resolve(root),
  appNodeModules: path.resolve(`${root}/node_modules`),
  appBuild: path.resolve(`${root}/build`),
  products: path.resolve(`${root}/products`),
  appRoot: path.resolve(`${root}/products/${PRODUCT_NAME}`),
  appPackageJson: path.resolve(`${root}/products/${PRODUCT_NAME}/package.json`),
  appSrc: path.resolve(`${root}/products/${PRODUCT_NAME}/src`),
  appIndexJs: path.resolve(`${root}/products/${PRODUCT_NAME}/src/index.js`),
  appAssets: path.resolve(`${root}/products/${PRODUCT_NAME}/src/assets`),
  coreSrc: path.resolve(`${root}/core/src`),
  componentsSrc: path.resolve(`${root}/components/src`),
  storybook: path.resolve(`${root}/components/.storybook`),
  testsSetup: path.resolve(`${root}/core/src/setupTests.js`),
  appPublic: path.resolve(`${root}/scripts/public`),
  indexHtml: path.resolve(`${root}/scripts/public/index.html`),
};
