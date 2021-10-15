import React from 'react';
import { useSelector } from 'react-redux';
import SingleMission from '../components/SingleMission';
import '../assets/css/missions.css';

const Missions = () => {
  const missions = useSelector((state) => state.missionsReducer.newMissions);

  return (
    <>
      <ul className="mission-table">
        <table>
          <thead>
            <tr className="table-head">
              <th>Mission</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {missions && missions.map((mission) => {
              const {
                name,
                id,
                description,
                reserved,
              } = mission;

              return (
                <tr key={id} className="mission-row">
                  <SingleMission
                    name={name}
                    description={description}
                    id={id}
                    reserved={reserved}
                  />
                </tr>
              );
            })}
          </tbody>
        </table>
      </ul>
    </>
  );
};

export default Missions;
