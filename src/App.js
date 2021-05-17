import React from "react";

// ? Componenets
import Home from "./screens/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
