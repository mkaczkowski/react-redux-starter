const path = require(`path`);

const PRODUCT_NAME = "lib-sample";

const root = `./../`;
module.exports = {
  root: path.resolve(root),
  appNodeModules: path.resolve(`${root}/node_packages`),
  appBuild: path.resolve(`${root}/build`),
  packages: path.resolve(`${root}/packages`),
  appRoot: path.resolve(`${root}/packages/${PRODUCT_NAME}`),
  appPackageJson: path.resolve(`${root}/packages/${PRODUCT_NAME}/package.json`),
  appSrc: path.resolve(`${root}/packages/${PRODUCT_NAME}/src`),
  appIndexJs: path.resolve(`${root}/packages/${PRODUCT_NAME}/src/index.tsx`),
  appAssets: path.resolve(`${root}/packages/${PRODUCT_NAME}/src/assets`),
  coreSrc: path.resolve(`${root}/lib-core/src`),
  componentsSrc: path.resolve(`${root}/lib-components/src`),
  storybook: path.resolve(`${root}/lib-components/.storybook`),
  testsSetup: path.resolve(`${root}/lib-core/src/setupTests.tsx`),
  appPublic: path.resolve(`${root}/lib-scripts/public`),
  indexHtml: path.resolve(`${root}/lib-scripts/public/index.html`),
};
