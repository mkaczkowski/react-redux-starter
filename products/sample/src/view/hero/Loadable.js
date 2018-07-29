import * as React from 'react';
import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading() {
    return <div>Loading!</div>;
  },
});

// LoadableBar.preload();
