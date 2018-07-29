//@flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import _pick from 'lodash/pick';
import { getTheme } from '@story/decorators/theme';

import Checkbox from '@components/common/checkbox/Checkbox';

const theme = require('./index').default;

class TestCheckbox extends React.PureComponent<any, any> {
  state = { check1: true, check2: false, check3: true };

  handleChange = (field, value) => {
    this.setState({ ...this.state, [field]: value });
  };

  render() {
    return (
      <div>
        <Checkbox
          checked={this.state.check1}
          label="Checked option"
          onChange={this.handleChange.bind(this, 'check1')}
        />
        <Checkbox
          checked={this.state.check2}
          label="Unchecked option"
          onChange={this.handleChange.bind(this, 'check2')}
        />
        <Checkbox checked disabled label="Disabled checkbox" />
        <Checkbox checked={this.state.check3} onChange={this.handleChange.bind(this, 'check3')} />
      </div>
    );
  }
}

const storyBook = {
  default: <TestCheckbox />,
};

const stories = storiesOf(`Components|Checkbox`, module);
stories.addDecorator(getTheme(theme));
Object.keys(storyBook).forEach(storyKey => stories.add(storyKey, () => storyBook[storyKey]));

export default _pick(storyBook, ['default']);
