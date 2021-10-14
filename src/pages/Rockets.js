import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SingleRocket from '../components/SingleRocket';
import { reserve } from '../redux/rockets/rocketsRedux';

const Rockets = () => {
  const list = useSelector((state) => state.rocketsReducer);
  const dispatch = useDispatch();

  const reserveRocket = (id) => {
    dispatch(reserve(list, id));
  };
  return (
    <>
      <ul>
        {list.map((each) => (
          <SingleRocket
            key={each.id}
            name={each.rocketName}
            description={each.description}
            image={each.flickrImages}
            id={each.id}
            reserve={reserveRocket}
          />
        ))}
      </ul>
    </>
  );
};

export default Rockets;
