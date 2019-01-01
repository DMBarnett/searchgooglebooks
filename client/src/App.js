import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Library from "./pages/Library";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch"
import Header from "./components/Header";


function App(){
  return(
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Search}/>
          <Route exact path="/library" component={Library}/>
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  )
}