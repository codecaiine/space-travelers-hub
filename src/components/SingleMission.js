import React from 'react';
import PropTypes from 'prop-types';

const SingleMission = ({ name, description }) => (
  <>
    <td className="name">{ name }</td>
    <td>{ description }</td>
    <td><span className="member">Not A Member</span></td>
    <td><button type="button" className="join">Join Mission</button></td>
  </>
);

SingleMission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SingleMission;
