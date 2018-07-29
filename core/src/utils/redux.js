import toSnakeCase from 'to-snake-case';
import { createActions, handleActions } from 'redux-actions';
import _flatten from 'lodash/flatten';

//ACTIONS HELPERS
export const newAction = (name, hasSuccess = false, hasFailure = false) => {
  let result = [];
  const snakedName = `${toSnakeCase(name)}`.toUpperCase();
  result.push(snakedName + '_ACTION');
  if (hasSuccess) result.push(snakedName + '_SUCCESS_ACTION');
  if (hasFailure) result.push(snakedName + '_FAILED_ACTION');
  return result;
};

export const actionName = name => toSnakeCase(name) + '_ACTION';

export const prepareActions = (objectActions, ...restActions) => {
  const dynamicActions = _flatten(restActions.map(entry => newAction(...entry)));
  return createActions(objectActions, ...dynamicActions);
};

export const prepareReducers = (actions, initialState) => {
  Object.entries(actions).forEach(([key, value]) => {
    if (!key || !value) throw new Error(`invalid action:reducer :: ${key}:${value}`);
  });
  return handleActions(actions, initialState);
};
