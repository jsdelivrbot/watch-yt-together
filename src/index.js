import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import Room from './components/room';
import rootReducer from './reducers/root-reducer';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)
const store = createStoreWithMiddleware(rootReducer);

ReactDOM.render(
  <Provider store={ store }>
    <Room/>
  </Provider>
, document.getElementById('root'));
