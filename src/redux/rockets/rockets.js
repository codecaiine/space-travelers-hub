const FETCH_DATA = 'my-app/rockets/FETCH';
const RESERVE_ROCKET = 'my-app/rockets/RESERVE';
const CANCEL_BOOKING_ROCKET = 'my-app/rockets/CANCEL';

const initialState = [];

const fetchData = (payload) => (
  {
    type: FETCH_DATA,
    payload,
  }
);

export const reserve = (list, id) => {
  const newState = list.map((rocket) => (
    (rocket.id !== id)
      ? rocket
      : { ...rocket, reserved: 'true' }
  ));
  return ({
    type: RESERVE_ROCKET,
    payload: newState,
  });
};

export const cancel = (list, id) => {
  const newState = list.map((rocket) => (
    (rocket.id !== id)
      ? rocket
      : { ...rocket, reserved: 'false' }
  ));
  return ({
    type: RESERVE_ROCKET,
    payload: newState,
  });
};

export const fetchAPI = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await response.json();
  const newArr = [];
  data.map((each) => {
    const {
      id,
      rocket_name: rocketName,
      description,
      wikipedia,
    } = each;
    const obj = {
      id,
      rocketName,
      description,
      wikipedia,
      flickrImages: each.flickr_images[0],
    };
    return newArr.push(obj);
  });
  dispatch(fetchData(newArr));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    case RESERVE_ROCKET:
      return action.payload;
    case CANCEL_BOOKING_ROCKET:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
