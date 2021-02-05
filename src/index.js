import React from 'react';
import ReactDOM from 'react-dom';

import './font.css';
import './index.css';

// import history from "./utils/history";
import App from './components/app/app.jsx';

// A function that routes the user to the right place after login
const onRedirectCallback = appState => {
  // console.log('appState is: ', appState);
  // console.log('window.location.pathname is: ', window.location.pathname);
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

const Auth0_redirect_base_URL = process.env.BASE_URL;

ReactDOM.render(
  <App />, document.getElementById('root')
);
