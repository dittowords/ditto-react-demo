import React, { useEffect, useState, useReducer } from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Switch,
  Route,
  Redirect,
  useRouteMatch,
} from 'react-router-dom';

import style from './style.css';

const App = () => {
  console.log('app loaded!');
  const [ paywall, setPaywall ] = useState(false);

  return (
    <div>hi!</div>
  );
};

export default App;
