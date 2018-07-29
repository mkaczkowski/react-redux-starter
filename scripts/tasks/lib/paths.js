const path = require('path');

const productName = process.env.PRODUCT_NAME || 'linguotica';
const landingHash = process.env.LANDING_HASH || 'ldc';
const landingType = process.env.LANDING_TYPE || 'intro';

const productPath = path.join(__dirname, '../../..', 'products', productName);
const landingPathRoot = path.join(productPath, 'landings', landingHash);
const landingPath = path.join(productPath, 'landings', landingHash, landingType);

module.exports = {
  productName,
  landingHash,
  landingType,
  landingPathRoot,
  landingPath,
};
