import { React, useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import { missionsThunk } from './redux/missions/missions';
import { fetchAPI } from './redux/rockets/rocketsRedux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAPI());
    dispatch(missionsThunk());
  }, []);

  return (
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
};

export default App;
