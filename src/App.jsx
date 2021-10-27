import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Router, Switch, Route } from "react-router-dom";
import Landing from "./components/landing/landing.jsx";
import Listing from "./components/listing/listing.jsx";
import Footer from "./components/footer";
import history from "./utils/history";

import "./App.scss";
import Header from "./components/header/index.jsx";

const App = () => {
  const [variant, setVariant] = useState("en");
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(variant);
  }, [variant, i18n]);

  return (
    <div>
      <Router history={history}>
        <Header
          variant={variant}
          onVariantChange={(e) => setVariant(e.target.value)}
        />
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
  );
};

export default App;
