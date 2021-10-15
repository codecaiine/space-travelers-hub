import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missions';

const SingleMission = ({
  name,
  description,
  id,
  reserved,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <td className="name">{name}</td>
      <td className="descr">{description}</td>
      <td>
        {
        reserved
          ? <span className="member active">Active Member</span>
          : <span className="member not-active">Not A Member</span>
        }
      </td>
      <td>
        {
        !reserved
          ? (
            <button
              type="button"
              className="btn join"
              onClick={() => dispatch(joinMission(id))}
            >
              Join Mission
            </button>
          )
          : (
            <button
              type="button"
              className="btn leave"
              onClick={() => dispatch(leaveMission(id))}
            >
              Leave Mission
            </button>
          )
        }
      </td>
    </>
  );
};

SingleMission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
};

SingleMission.defaultProps = {
  reserved: false,
};

export default SingleMission;
