import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missions';

const SingleMission = ({ name, description, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <td className="name">{name}</td>
      <td>{description}</td>
      <td><span className="member">Not A Member</span></td>
      <td>
        <button
          type="button"
          className="btn join"
          onClick={() => dispatch(joinMission(id))}
        >
          Join Mission
        </button>
        <button
          type="button"
          className="btn leave"
          onClick={() => dispatch(leaveMission(id))}
        >
          Leave Mission
        </button>
      </td>
    </>
  );
};

SingleMission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default SingleMission;
