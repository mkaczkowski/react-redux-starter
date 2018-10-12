
import * as React from 'react';
import Button from 'components/src/common/button/Button';
import Logger from 'core/src/modules/logger';

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
