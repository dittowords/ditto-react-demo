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
    <Container fluid className={style.container_fluid}>
      <Router history={history}>
        <Switch>
          <PrivateRoute exact path="/">
            <Redirect to={routes.nav.projects.path} />
          </PrivateRoute>
          <PrivateRoute path={routes.nav.projects.path}>
            <Header daysOnTrial={daysOnTrial}/>
            <TitleBar title="Projects"></TitleBar>
            <Projects/>
            { paywall && workspaceInfo &&
              <PaywallModal
              workspaceUsers = {workspaceUsers.map((user) => user.name)}
              authToken = {authToken}
              workspaceInfo={workspaceInfo}
              />
            }
          </PrivateRoute>
          <PrivateRoute path={routes.nav.search.path}>
            <Header daysOnTrial={daysOnTrial}/>
            <Search workspaceUsers={workspaceUsers}/>
            { paywall && workspaceInfo &&
              <PaywallModal
              workspaceUsers = {workspaceUsers.map((user) => user.name)}
              authToken = {authToken}
              workspaceInfo={workspaceInfo}
              />
            }
          </PrivateRoute>
          <PrivateRoute path={routes.nav.dev.path}>
            <FlaggedFeature name="github_app">
              {(isEnabled) => <span>{isEnabled ?
                <span>
                <Header daysOnTrial={daysOnTrial}/>
                <TitleBar title="Development"></TitleBar>
                <Dev/>
                { paywall && workspaceInfo &&
                  <PaywallModal
                  workspaceUsers = {workspaceUsers.map((user) => user.name)}
                  workspaceInfo={workspaceInfo}
                  authToken = {authToken}
                  />
                }
                </span> :
                null
              }</span>}
            </FlaggedFeature>
          </PrivateRoute>
          <PrivateRoute path={routes.nav.components.path}>
            <Header daysOnTrial={daysOnTrial}/>
            <AllComps/>
          </PrivateRoute>
          <PrivateRoute path={routes.other.account.path}>
            <Header daysOnTrial={daysOnTrial}/>
            <TitleBar title="Account Settings"></TitleBar>
            <AccountSettings
              workspaceInfo = {workspaceInfo}
              workspaceUsers = {workspaceUsers}
              token = {authToken}
              checkPlan = {checkPlan}
              numEditorUsers = {numEditorUsers}
              numCommenterUsers = {numCommenterUsers}
              numEditorSeats = {numEditorSeats}
              numCommenterSeats = {numCommenterSeats}
            />
            { paywall && workspaceInfo &&
              <PaywallModal
                workspaceUsers = {workspaceUsers}
                authToken = {authToken}
                workspaceInfo={workspaceInfo}
              />
            }
          </PrivateRoute>
          <PrivateRoute path={routes.other.doc.path}>
            <Header daysOnTrial={daysOnTrial} />
            <Doc workspaceUsers={workspaceUsers} />
            { paywall && workspaceInfo &&
              <PaywallModal
                workspaceUsers = {workspaceUsers}
                authToken = {authToken}
                workspaceInfo={workspaceInfo}
              />
            }
          </PrivateRoute>
          <PrivateRoute path={routes.other.dev_paywall.path}>
            <Header daysOnTrial={daysOnTrial}/>
            <TitleBar title="Development"></TitleBar>
            <DevPaywall/>
          </PrivateRoute>
          <PrivateRoute path={routes.other.onboarding.path}>
            <Onboarding />
          </PrivateRoute>
          {/*<PrivateRoute path={routes.other.onboarding_none.path}>
            <Onboarding />
          </PrivateRoute>*/}
          <Route path={routes.other.login.path}>
            <Login />
          </Route>
          <Route path={routes.other.custom_login.path}>
            <CustomLogin />
          </Route>
          <Route path={routes.other.join_workspace.path}>
            <JoinWorkspace />
          </Route>
          <Route path={routes.other.legacy_join_workspace.path}>
            <JoinWorkspace />
          </Route>
          {/*<Route path={routes.other.planLimit.path}>
            <PlanLimit/>
          </Route>*/}
          <Route path={routes.other.authCallback.path}>
            <AuthCallback/>
          </Route>
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
