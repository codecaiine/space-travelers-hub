import React from 'react';
import { useSelector } from 'react-redux';
import SingleRocket from '../components/SingleRocket';

const Rockets = () => {
  const list = useSelector((state) => state.rocketsReducer);
  return (
    <>
      <ul>
        {list.map((each) => (
          <SingleRocket
            key={each.id}
            name={each.rocketName}
            description={each.description}
            image={each.flickrImages}
          />
        ))}
      </ul>
    </>
  );
};

export default Rockets;
