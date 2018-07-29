// @flow
export type FunctionType = () => void;
export type TranslateType = (value: string) => string;
export type ActionType = (...payload: any) => void;
export type FormPayload = {
  values: Object,
  onSuccess: any,
  onError: any,
};

export type CallbcackActionType = ({ values: any, onSuccess: FunctionType, onError?: FunctionType }) => void;

export type User = {
  id: string,
};
