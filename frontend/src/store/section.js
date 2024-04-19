import { createStore } from 'redux';
const READ_PROVIDERS = "/providers"
const SET_PROVIDERS = 'session/SET_PROVIDERS';
const SET_ALL_PROVIDERS = 'session/SET_ALL_PROVIDERS';
const SET_CATEGORY = 'session/SET_CATEGORY';

export const getProviders = (results) => async (dispatch) => {
  const response = await fetch('/api/provider', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Results': JSON.stringify(results),
    },
  });

  if (response.ok) {
    const providers = await response.json();
    dispatch(getProvider(providers));
  } else {
    // Handle error
  }
};
export const getAllProviders = () => async (dispatch) => {
  const response = await fetch('/api/provider/all', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',

    },

  });

  if (response.ok) {
    const providers = await response.json();
    dispatch(getAllProvider(providers));
  } else {
    // Handle error
  }
};
export const getProvider = (providers) => ({
  type: SET_PROVIDERS,
  providers,
});
export const getAllProvider = (providers) => ({
  type: SET_ALL_PROVIDERS,
  providers,

});
export const setCategory = (category) => ({
  type: SET_CATEGORY,
  category,
});


const initialState = {
  section2: {},
  section3: {},
  allSections: {}
};

export const sectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SECTION2':
      return { ...state, section2: action.payload };
    case 'SET_SECTION3':
      return { ...state, section3: action.payload };
    case 'SET_ZIPCODE':
      return { ...state, zipCode: action.payload };
      case 'SET_CATEGORY':
      return { ...state, category: action.payload };
    case SET_ALL_PROVIDERS:
      return { ...state, allSections: action.providers };
    default:
      return state;
  }
}
export default sectionReducer



