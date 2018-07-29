import React from 'react';
import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'APP-UI',
  url: '#',
  addonPanelInRight: true,
  sortStoriesByKind: true,
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
});

const commonReq = require.context('../../components/src', true, /.stories.js$/);
const productReq = require.context('../../products/sample/src', true, /.stories.js$/);

configure(() => {
  commonReq.keys().forEach(filename => commonReq(filename));
  productReq.keys().forEach(filename => productReq(filename));
}, module);
