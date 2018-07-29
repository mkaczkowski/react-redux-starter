// @flow
import * as React from 'react';
import Button from '@components/common/button/Button';
import Logger from '@core/modules/logger';
import 'modernizr';
import type { TranslateType } from '@core/constants/flowTypes';

export type HeroProps = {
  t: TranslateType,
};

class Hero extends React.PureComponent<HeroProps> {
  logger = Logger.getInstance('Hero');

  componentDidMount() {}

  render() {
    return (
      <div className="hero">
        <h1>{this.props.t('BUTTON.NEXT')}</h1>
        <div>
          <Button>TRY FOR FREE!</Button>
        </div>
      </div>
    );
  }
}

export default Hero;
