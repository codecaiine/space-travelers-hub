const FETCH_DATA = 'my-app/rockets/FETCH';

const initialState = [];

const fetchData = (payload) => (
  {
    type: FETCH_DATA,
    payload,
  }
);

export const fetchAPI = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await response.json();
  const newArr = [];
  data.map((each) => {
    const {
      id,
      rocket_name: rocketName,
      description,
    } = each;
    const obj = {
      id,
      rocketName,
      description,
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
    default:
      return state;
  }
};

export default reducer;
