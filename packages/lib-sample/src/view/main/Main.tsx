
import * as React from 'react';
import Button from 'lib-components/src/common/button/Button';

// eslint-disable-next-line react/prefer-stateless-function
class Main extends React.PureComponent {
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
