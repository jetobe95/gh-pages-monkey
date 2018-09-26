import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import Store from './store/index';

const Index = () => {
  return (
    <Provider store={Store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
