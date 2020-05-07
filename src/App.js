import React from "react";
import Movie from "./components/Movies";
import NoMatch from "./components/NoMatch";
import MovieDetail from "./components/MovieDetails";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/MovieDb" component={Movie} />
      <Route exact path="/MovieDetail/:id" component={MovieDetail} />
      <Route path="/">
        <Redirect to="/MovieDb" />
      </Route>
      {/* <Route path="*" component={NoMatch}></Route> */}
    </Router>
  );
}

export default App;
