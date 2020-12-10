import React from 'react';
import { render } from 'react-dom';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { TodoScreen } from './screens/TodoScreen';

import './index.css';

render(
  <Provider store={store}>
    <TodoScreen />
  </Provider>,
  document.getElementById('root')
);
