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
  const { isAuthenticated, loading, getTokenSilently } = useAuth0();
  const [ paywall, setPaywall ] = useState(false);
  const [ daysOnTrial, setDaysOnTrial ] = useState();
  const [ authToken, setAuthToken ] = useState("");

  const [ workspaceInfo, setWorkspaceInfo ] = useState();
  const [ workspaceUsers, setWorkspaceUsers ] = useState([]);
  const [ subscriptions, setSubscriptions ] = useState();

  useEffect(() => {
    if (!loading && isAuthenticated) {
      checkPlan();
    }
  }, [loading, isAuthenticated]);

  return (
    <div>hi!</div>
  );
};

export default App;
