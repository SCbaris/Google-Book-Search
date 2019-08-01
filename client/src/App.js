import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Books} /> {/* This is main page It will show to book search */}
          <Route exact path="/books" component={Books} /> {/* book search part. same as main page */}
          <Route exact path="/saved" component={Saved} /> {/* Saved books page. This page show what we save. */}
          <Route component={NoMatch} /> {/* if the path is unsensible, it will show nomatch page */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
