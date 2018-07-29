//@flow
import React, { PureComponent } from 'react';
import classnames from 'classnames';
import './Button.scss';

const LEVEL = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  INFO: 'info',
  NEUTRAL: 'neutral',
};

const SHAPE = {
  RAISED: 'raised',
  FLAT: 'flat',
};

const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

export type ButtonProps = {
  type?: string,
  children?: any,
  className?: string,
  disabled?: boolean,
  primary?: boolean,
  secondary?: boolean,
  info?: boolean,
  small?: boolean,
  large?: boolean,
  fluid?: boolean,
  flat?: boolean,
  href?: string,
  label?: string,
  icon?: string | any,
  loading?: boolean,
  onClick?: (event?: any, others?: any) => void,
};

class Button extends PureComponent<ButtonProps> {
  buttonNode: { blur: () => void };

  static defaultProps = {
    className: '',
    type: 'button',
  };

  getLevel = () => {
    if (this.props.primary) return LEVEL.PRIMARY;
    else if (this.props.secondary) return LEVEL.SECONDARY;
    else if (this.props.info) return LEVEL.INFO;
    return LEVEL.NEUTRAL;
  };

  getShape = () => {
    if (this.props.flat) return SHAPE.FLAT;
    return SHAPE.RAISED;
  };

  getSize = () => {
    if (this.props.small) return SIZE.SMALL;
    else if (this.props.large) return SIZE.LARGE;
    return SIZE.MEDIUM;
  };

  render() {
    const {
      children,
      className,
      flat, // eslint-disable-line
      primary, // eslint-disable-line
      secondary, // eslint-disable-line
      info, // eslint-disable-line
      small, // eslint-disable-line
      large, // eslint-disable-line
      label,
      icon,
      fluid, // eslint-disable-line
      href,
      loading, // eslint-disable-line
      onClick,
      type,
      ...others
    } = this.props;

    const element = href ? 'a' : 'button';
    const level = this.getLevel();
    const shape = this.getShape();
    const size = this.getSize();

    const classes = classnames(
      'button',
      [size],
      [shape],
      {
        [level]: true,
        fluid: fluid,
        loading: loading,
      },
      className
    );

    const props = {
      ...others,
      href,
      className: classes,
      disabled: this.props.disabled,
      type: !href ? type : null,
      onClick: onClick,
      ref: (node: any) => (this.buttonNode = node),
      'data-react-toolbox': 'button',
    };

    return React.createElement(element, props, icon ? icon : null, !loading ? label : '', children);
  }
}

export default Button;
