import React from 'react';
import { useSelector } from 'react-redux';

const Rockets = () => {
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
