//@flow
import React, { PureComponent } from 'react';
import classnames from 'classnames';
import Check from './Check';
import './Checkbox.scss';
import type { FunctionType } from '@core/constants/flowTypes';

export type CheckboxProps = {
  t?: FunctionType,
  checked: boolean,
  children: any,
  className: string,
  disabled: boolean,
  label: string,
  name: string,
  onChange: (name: any, event: any) => void,
  renderError: any,
  touched: any,
  error: string,
  style: Object,
};

class Checkbox extends PureComponent<CheckboxProps> {
  static defaultProps = {
    checked: false,
    className: '',
    disabled: false,
  };

  inputNode: any;

  handleToggle = (event: MouseEvent) => {
    if (event.pageX !== 0 && event.pageY !== 0) this.blur();
    if (!this.props.disabled && this.props.onChange) {
      this.props.onChange(!this.props.checked, event);
    }
  };

  blur() {
    this.inputNode && this.inputNode.blur();
  }

  focus() {
    this.inputNode && this.inputNode.focus();
  }

  render() {
    const {
      t,
      checked,
      children,
      disabled,
      label,
      name,
      style,
      onChange, // eslint-disable-line
      renderError,
      touched,
      error,
      ...others
    } = this.props;

    const className = classnames(
      'field',
      {
        disabled: this.props.disabled,
        invalid: !!error && touched,
      },
      this.props.className
    );

    return (
      <div>
        <label data-react-toolbox="checkbox" className={className}>
          <input
            {...others}
            type="checkbox"
            checked={checked}
            className="checkbox-input"
            disabled={disabled}
            name={name}
            onChange={() => {}}
            onClick={this.handleToggle}
            ref={node => (this.inputNode = node)}
          />
          <Check checked={checked} disabled={disabled} style={style} />
          {label ? (
            <span data-react-toolbox="label" className={'text'}>
              {label}
            </span>
          ) : null}
          {children}
        </label>
        {renderError && renderError(this.props)}
      </div>
    );
  }
}

export default Checkbox;
