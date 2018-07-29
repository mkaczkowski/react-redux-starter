//@flow
import * as React from 'react';
import classnames from 'classnames';

export type CheckProps = {
  checked: boolean,
  children?: any,
  onMouseDown?: () => void,
  style: any,
};

const Check = ({ checked, children, onMouseDown, theme, style }: CheckProps) => (
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
  <div
    role="main"
    data-react-toolbox="check"
    className={classnames('check', { checked: checked })}
    onMouseDown={onMouseDown}
    style={style}
  >
    {children}
  </div>
);

export default Check;
