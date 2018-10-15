import { ComponentClass, SFC, createElement } from 'react';
import { Iterable } from 'immutable';

export const toJS = (WrappedComponent: SFC<any> | ComponentClass<any>) => (wrappedComponentProps: Object) => {
  const KEY = 0;
  const VALUE = 1;
  //prettier-ignore
  const propsJS = Object.entries(wrappedComponentProps).reduce(
    (newProps: any, wrappedComponentProp: any) => {
    // eslint-disable-next-line no-param-reassign
      newProps[wrappedComponentProp[KEY]] = Iterable.isIterable(wrappedComponentProp[VALUE])
        ? wrappedComponentProp[VALUE].toJS()
        : wrappedComponentProp[VALUE];
      return newProps;
    },
    {}
  );

  // return <WrappedComponent {...propsJS} />;
  return createElement(WrappedComponent, propsJS);
};
