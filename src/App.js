import React from 'react';
import { Route, Switch } from 'react-router';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import Missions from './pages/Missions';
import Rockets from './pages/Rockets';

const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/myprofile">
        <Profile />
      </Route>
      <Route exact path="/missions">
        <Missions />
      </Route>
      <Route exact path="/">
        <Rockets />
      </Route>
    </Switch>
  </>
);

export default App;
