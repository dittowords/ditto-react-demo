import React, { useState } from "react";
import DittoProvider from "ditto-react";
import { Router, Switch, Route } from "react-router-dom";
import Landing from "./components/landing/landing.jsx";
import Listing from "./components/listing/listing.jsx";
import Footer from "./components/footer";
import history from "./utils/history";

import source from "./ditto";

import "./App.scss";
import Header from "./components/header/index.jsx";

const App = () => {
  const [variant, setVariant] = useState("base");

  return (
    <DittoProvider source={source} variant={variant}>
      <div>
        <Header
          variant={variant}
          onVariantChange={(e) => setVariant(e.target.value)}
        />
        <Router history={history}>
          <Switch>
            <Route path="/listing">
              <Listing />
            </Route>
            <Route>
              <Landing />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    </DittoProvider>
  );
};

export default App;
