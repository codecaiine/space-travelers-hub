const FETCH_MISSIONS = 'react-spacex/missions/FETCH_MISSIONS';

export const fetchMissions = (missions) => ({
  type: FETCH_MISSIONS,
  missions,
});

export const fetchMIssionsFromApi = async () => {
  const missions = await fetch('https://api.spacexdata.com/v3/missions');
  const response = await missions.json();
  const newResponse = response.map((mission) => (
    {
      id: mission.mission_id,
      name: mission.mission_name,
      description: mission.description,
    }
  ));
  return newResponse;
};

export const missionsThunk = () => async (dispatch) => {
  const newMissions = await fetchMIssionsFromApi();
  if (newMissions) {
    dispatch(fetchMissions(newMissions));
  }
};

const initialState = [];

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return {
        ...state,
        newMissions: action.missions,
      };
    default:
      return state;
  }
};

export default missionsReducer;
