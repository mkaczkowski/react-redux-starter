
import * as React from 'react';
import Button from '@components/common/button/Button';
import Logger from '@core/modules/logger';

class Hero extends React.PureComponent {
  logger = Logger.getInstance('Hero');

  componentDidMount() {}

  render() {
    return (
      <div className="hero">
        <h1>BUTTON.NEXT</h1>
        <div>
          <Button>TRY FOR FREE!</Button>
        </div>
      </div>
    );
  }
}

export default Hero;
