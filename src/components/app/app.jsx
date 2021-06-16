import React, { useEffect, useState, useReducer } from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Switch,
  Route,
  Redirect,
  useRouteMatch,
} from 'react-router-dom';
import Landing from '../landing/landing.jsx';
import Listing from '../listing/listing.jsx';
import Hosts from '../hosts/hosts.jsx';
import history from "../../utils/history";

import style from './style.css';

const App = () => {
  const [ paywall, setPaywall ] = useState(false);

  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/listing">
            <Listing/>
          </Route>
          <Route path="/hosts">
            <Hosts/>
          </Route>
          <Route>
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
