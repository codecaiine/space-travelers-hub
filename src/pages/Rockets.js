import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAPI } from '../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAPI());
  }, []);

  const list = useSelector((state) => state.rocketsReducer);
  return (
    <>
      <h1>
        Rockets
      </h1>
      <ul>
        {list.map((each) => (
          <li key={each.id}>{each.description}</li>
        ))}
      </ul>
    </>
  );
};

export default Rockets;
