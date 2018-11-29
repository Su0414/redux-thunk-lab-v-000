import React from 'react';
import ReactDOM from 'react-dom'

import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose } from 'redux'

import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { WrapperApp } from './App'

const store = createStore(
    rootReducer, 
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension
    )
)

   ReactDOM.render(
         
    <Provider store={store}>
      <WrapperApp />
    </Provider>,

    document.getElementById('root')
  );
