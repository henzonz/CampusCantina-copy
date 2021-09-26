import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import{ createStore } from 'redux';
import rootReducer from './redux/reducers/rootReducer';

// Allows components to access store via context
import { Provider } from 'react-redux';

// Wrap everything in this to get URL info
import { BrowserRouter } from 'react-router-dom';

// Create global datastore for app
const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
