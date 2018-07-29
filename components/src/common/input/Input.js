//@flow
import * as React from 'react';
import classnames from 'classnames';
import { handlePaste, restrictOnKeyPress, restrictOnPasteOrDrop } from '@core/utils/restrict/restrict';
import './Input.scss';

export type InputProps = {
  children?: any,
  t?: any,
  className: string,
  defaultValue: string,
  disabled: boolean,
  placeholder: string,
  label: string,
  maxLength: number,
  name: string,
  onBlur: (value?: any) => void,
  onChange: (value?: any) => void,
  onFocus: (value?: any) => void,
  setFieldValue: (name: string, value: any) => void,
  setFieldTouched: (name: string, value: any) => void,
  touched: boolean,
  error: any,
  required: boolean,
  restrict: RegExp,
  icon: any,
  renderProp?: (props: InputProps) => any,
  renderError?: (props: InputProps) => any,
  type: string,
  value: string,
};

class Input extends React.PureComponent<InputProps> {
  inputNode: any;

  static defaultProps = {
    className: '',
    placeholder: '',
    disabled: false,
    required: false,
    type: 'text',
  };

  handleKeyPress = (event: Event) => {
    const { restrict } = this.props;

    let isValid = true;
    const isPasteOrDrop = event.type === 'paste' || event.type === 'drop';
    if (isPasteOrDrop) {
      const textContent = handlePaste(event);
      isValid = restrictOnPasteOrDrop(textContent, restrict);
      if (isValid) {
        event.preventDefault();
        event.stopPropagation();
        this.props.setFieldValue(this.props.name, textContent);
        this.props.setFieldTouched(this.props.name, true);
      }
    } else {
      isValid = restrictOnKeyPress(event, restrict);
    }

    if (!isValid) {
      event.preventDefault();
      event.stopPropagation();
    }

    return undefined;
  };

  blur() {
    this.inputNode.blur();
  }

  focus() {
    this.inputNode.focus();
  }

  render() {
    const {
      children,
      t,
      defaultValue,
      disabled,
      placeholder,
      icon,
      name,
      label: labelText,
      maxLength,
      required,
      type,
      value,
      renderProp: render,
      renderError,
      setFieldValue,
      setFieldTouched,
      touched,
      error,
      ...others
    } = this.props;

    const labelClassName = classnames('label');
    const className = classnames(
      'input',
      {
        disabled: disabled,
        invalid: !!error && touched,
        withIcon: !!icon,
      },
      this.props.className
    );

    const inputElementProps = {
      ...others,
      className: classnames('inputElement'),
      name,
      defaultValue,
      disabled,
      required,
      maxLength,
      type,
      value,
      onKeyPress: this.handleKeyPress,
      onPaste: this.handleKeyPress,
      onDrop: this.handleKeyPress,
      ref: node => (this.inputNode = node),
    };

    const renderIcon = () => {
      const IconAlias = icon;
      return <IconAlias className={'icon'} />;
    };

    const renderPlaceholder = () => (
      <span hidden={labelText} className={'placeholder'}>
        {placeholder}
      </span>
    );

    return (
      <div data-react-toolbox="input" className={className}>
        {labelText && (
          <label className={labelClassName}>
            {labelText}
            {required && <span className={'required'}> * </span>}
          </label>
        )}
        <div style={{ position: 'relative' }}>
          {React.createElement('input', inputElementProps)}

          {icon && renderIcon()}

          {placeholder && renderPlaceholder()}

          {render && render({ ...this.props, value })}

          {children}
        </div>

        {renderError && renderError(this.props)}
      </div>
    );
  }
}

export default Input;
