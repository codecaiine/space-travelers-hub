import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import Error from './pages/Error';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" />
      <Route path="/rockets" />
      <Route path="/missions" />
      <Route path="/my-profile" />
      <Route path="*">
        <Error />
      </Route>
    </Switch>
  </Router>
);

export default App;
