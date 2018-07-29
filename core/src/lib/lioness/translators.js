import curry from 'lodash/curry';

import { interpolateComponents, interpolateString } from './interpolators.js';

export const ti = curry((interpolate, translate, message, scope = {}) => {
  return interpolate(translate(message), scope);
});

export const tinp = curry((interpolate, translate, context, one, other, count, scope = {}) => {
  return interpolate(translate(context, one, other, count), scope);
});

export const t = ti(interpolateString);
export const tcnp = tinp(interpolateComponents);
