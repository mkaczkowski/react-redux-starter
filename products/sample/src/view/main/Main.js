// @flow
import * as React from 'react';
import Button from '@components/common/button/Button';
import 'modernizr';
import type { TranslateType } from '@core/constants/flowTypes';

export type MainProps = {
  t: TranslateType,
};

class Main extends React.PureComponent<MainProps> {
  render() {
    return (
      <div className="main">
        <div>
          <Button>MAINPAGE</Button>
        </div>
      </div>
    );
  }
}

export default Main;
