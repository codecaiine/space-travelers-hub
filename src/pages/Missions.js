import React from 'react';
import { useSelector } from 'react-redux';
import SingleMission from '../components/SingleMission';
import '../css/missions.module.css';

const Missions = () => {
  const missions = useSelector((state) => state.missionsReducer.newMissions);

  return (
    <>
      <ul>
        <table>
          <thead>
            <tr>
              <th>Mission</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {missions && missions.map((mission) => {
              const { name, id, description } = mission;
              return (
                <tr key={id} className="mission-row">
                  <SingleMission name={name} description={description} id={id} />
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
