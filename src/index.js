import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.min.css'

import './index.css';
import App from './App';


import { createStore } from 'redux'
import {Provider} from 'react-redux'
import mReducer from './reducers/mReducer'


const store= createStore(mReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,document.getElementById('root')
);

reportWebVitals();