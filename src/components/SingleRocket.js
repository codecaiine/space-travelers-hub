import React from 'react';
import PropTypes from 'prop-types';
import './rocket.module.css';

const SingleRocket = ({
  name,
  description,
  image,
}) => (
  <div className="each-rocket">
    <div className="rocket-img">
      <img src={image} alt={name} className="img-size" />
    </div>
    <div className="rocket-details">
      <h2>{name}</h2>
      <p>{description}</p>
      <button type="submit" className="rocket-reserve-btn">Reserve Rocket</button>
    </div>
  </div>
);

SingleRocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.isRequired,
  image: PropTypes.isRequired,
};

export default SingleRocket;
