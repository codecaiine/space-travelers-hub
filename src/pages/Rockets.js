import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SingleRocket from '../components/SingleRocket';
import { reserve, cancel } from '../redux/rockets/rockets';

const Rockets = () => {
  const list = useSelector((state) => state.rocketsReducer);
  const dispatch = useDispatch();

  const reserveRocket = (id) => (
    (list[id - 1].reserved && list[id - 1].reserved === 'true')
      ? dispatch(cancel(list, id))
      : dispatch(reserve(list, id))
  );

  // list = useSelector((state) => state.rocketsReducer);
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
            rocket={each}
          />
        ))}
      </ul>
    </>
  );
};

export default Rockets;
