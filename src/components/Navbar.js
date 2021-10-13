import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/planet.png';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/myprofile',
      text: 'My Profile',
    },
  ];

  return (
    <>
      <nav className="nav-bar">
        <div>
          <img src={logo} alt="Space-Ship Logo" />
          <h3>Space Travelers&apos; Hub</h3>
        </div>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                activeClassName="current"
                className="nav-link"
                exact
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
