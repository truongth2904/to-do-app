import React from 'react';
import {Provider} from 'react-redux';
import Root from './src';
import {store} from './src/redux/store/configStore';

const App = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};

export default App;
