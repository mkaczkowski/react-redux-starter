import { fromJS } from 'immutable';

const prepareGlobalState = (state: any): any => {
  const newState = { ...state };
  const firstValue = newState[Object.keys(newState)[0]];
  newState[Object.keys(state)[0]] = fromJS(firstValue);
  return newState;
};

export const expectSelector = (state: any) => (selector: any, expectedResult: any) =>
  expect(selector(prepareGlobalState(state)).toJS()).toEqual(expectedResult);
