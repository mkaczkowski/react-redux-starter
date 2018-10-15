import toSnakeCase from 'to-snake-case';
import { ActionMap, createActions, handleActions } from 'redux-actions';
import _flatten from 'lodash/flatten';

//ACTIONS HELPERS
export const newAction = (name: string, hasSuccess: boolean = false, hasFailure: boolean = false): string[] => {
  const result: string[] = [];
  const snakedName: string = `${toSnakeCase(name)}`.toUpperCase();
  result.push(`${snakedName}_ACTION`);
  if (hasSuccess) result.push(`${snakedName}_SUCCESS_ACTION`);
  if (hasFailure) result.push(`${snakedName}_FAILED_ACTION`);
  return result;
};

export const actionName = (name: string) => `${toSnakeCase(name)}_ACTION`;

export const prepareActions = (objectActions: ActionMap<any, any>, ...restActions: Array<any[]>) => {
  // @ts-ignore
  const dynamicActions = _flatten(restActions.map(entry => newAction(...entry)));
  return createActions(objectActions, ...dynamicActions);
};

export const prepareReducers = (actions: any, initialState: Object) => {
  Object.entries(actions).forEach(([key, value]) => {
    if (!key || !value) throw new Error(`invalid action:reducer :: ${key}:${value}`);
  });
  return handleActions(actions, initialState);
};
