import React from 'react';
import { useSelector } from 'react-redux';
import '../styling/profile.css';

const Profile = () => {
  const missions = useSelector((state) => state.missionsReducer.newMissions);

  const list = useSelector((state) => state.rocketsReducer);
  const filteredRockets = list.filter((each) => each.reserved === 'true');
  let filteredMissions;

  if (missions) {
    filteredMissions = missions.filter((mission) => mission.reserved);
  }
  return (
    <section className="my-profile">
      <div className="profile">
        <div className="missions">
          <h2>My Missions</h2>
          <ul className="profile-lists">
            {filteredMissions && filteredMissions.map((mission) => {
              const { name, id } = mission;
              return (
                <li
                  key={id}
                  className="list"
                >
                  {name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="rockets">
          <h2>My Rockets</h2>
          <ul className="profile-lists">
            {filteredRockets.map((reserved) => (
              <li key={reserved.id} className="list">{reserved.rocketName}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Profile;
