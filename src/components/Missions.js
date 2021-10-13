import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from '../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return <></>;
};
export default Missions;

