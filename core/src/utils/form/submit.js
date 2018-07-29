// @flow
export const onSubmitHandler = async (values: any, onSuccess: any, onError: any, onSubmit: any) => {
  onSubmit({ values, onSuccess, onError });
};
