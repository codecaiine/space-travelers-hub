import React from 'react';
import PropTypes from 'prop-types';
import './rocket.module.css';

const SingleRocket = ({
  name,
  description,
  image,
  reserve,
  id,
}) => (
  <div className="rocket-container">
    <div className="rocket-img">
      <img src={image} alt={name} className="img-size" />
    </div>
    <div className="rocket-info">
      <h2>{name}</h2>
      <p>{description}</p>
      <button type="submit" className="btn-reservation" onClick={() => reserve(id)}>Reserve Rocket</button>
    </div>
  </div>
);

SingleRocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserve: PropTypes.func.isRequired,
};

export default SingleRocket;