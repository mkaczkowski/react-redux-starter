import { fromJS, Iterable } from 'immutable';

const prepareGlobalState = (state: any): any => {
  const newState = { ...state };
  const firstValue = newState[Object.keys(newState)[0]];
  newState[Object.keys(state)[0]] = fromJS(firstValue);
  return newState;
};

export const expectSelector = (state: any) => (selector: any, expectedResult: any) => {
  const result = selector(prepareGlobalState(state));
  if (Iterable.isIterable(result)) {
    return expect(result.toJS()).toEqual(expectedResult);
  }
  return expect(result).toEqual(expectedResult);
};
