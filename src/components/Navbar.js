import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/planet.png';

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
      path: '/profile',
      text: 'My Profile',
    },
  ];

  return (
    <header>
      <nav className="nav-bar">
        <div className="inner-nav">
          <div className="space">
            <img src={logo} alt="Space-Ship Logo" />
            <h1>Space Travelers&apos; Hub</h1>
          </div>
          <ul>
            {links.map((link) => (
              <li key={link.id} className="nav-list">
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
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
