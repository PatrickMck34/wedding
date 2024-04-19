
import { csrfFetch } from './csrf';

const CREATE_PROVIDER = "/provider/create"
const READ_PROVIDERS = "session/providers"
const SET_PROVIDERS = 'session/SET_PROVIDERS';
const UPDATE_PROVIDER = 'session/UPDATE_PROVIDERS';
const DELETE_PROVIDER = '/DELETE_PROVIDERS';


// {
//   "bot_type": "AI assistant",
//   "bot_userid": "Janes_ai_assistant",
//   "bot_nickname": "Jane's ai assistant",
//   "is_privacy_mode": false,
//   "ai": {
//       "backend": "chatgpt",
//       "system_message": "You are a helpful assistant.",
//       "temperature": 1.00,
//       "max_tokens": 256,
//       "top_p": 1.00,
//       "presence_penalty": 0.00,
//       "frequency_penalty": 0.00
//   }
// }
// {
//   "bot_callback_url": "",
//   "is_privacy_mode": false,
//   "enable_mark_as_read": true,
//   "show_member": false,
//   "channel_invitation_preference": 0,
//   "created_at": 1686141160,
//   "bot": {
//       "bot_userid": "Janes_ai_assistant",
//       "bot_nickname": "Jane's ai assistant",
//       "bot_profile_url": "",
//       "bot_require_auth_for_profile_image": false,
//       "bot_metadata": {},
//       "bot_token": "10f514b570affa358002ae1a3edcbb27cb5cd1f9",
//       "bot_type": "AI assistant"
//   },
//   "ai": {
//       "backend": "chatgpt",
//       "system_message": "You are a helpful assistant.",
//       "temperature": 1.0,
//       "max_tokens": 256,
//       "top_p": 1.0,
//       "presence_penalty": 0.0,
//       "frequency_penalty": 0.0
//   }
// }

export const createProvider = (provider) => async (dispatch) => {
  // const Users = useSelector(state => state.session.user.id)
  if (!provider) {
    console.error('Provider is undefined or null');
    return;
  }
  const { Party, Table, Guests, remainder } = provider;
 

  const data = await csrfFetch('/api/provider/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      Party, Table, Guests, remainder
    }),
  });
  const response = await data.json();
  dispatch(createProviders(response));
  return response
}
export const createProviders = (provider) => ({
  type: 'CREATE_PROVIDER',
  payload: provider,
})
export const updateProvider = (provider) => async (dispatch) => {
  // const Users = useSelector(state => state.session.user.id)
  const { Name,
    id,
    Address,
    City,
    State,
    Phone,
    zipCode,
    Approved,
    domesticViolence,
    LGBTQ,
    crisisResources,
    humanTrafficking,
    military,
    lawEnforcement,
    elderSurvivor,
    childSurvivor,
    confidential,
    nonConfidential,
    healthCenter,
    dvProgram,
    psychProgram,
    callpolice,
    advocacyProgram,
    legalAdvice,
    forensicExams,
    generalHealth,
    pregnancy,
    housing,
    collegeOnCampus,
    title9,
    tribal,
    coalition,
    std,
    hivSupport,
    immigrants,
    blindDeaf,
    disabled,
    directCareCo,
    directCareMed,
    directCareOther,
    substanceAbuse,
    missingPersons,
    specialNeeds,
    alternativeCare, } = provider;
  const data = await csrfFetch(`/api/provider/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      Name,
      id,
      Address,
      City,
      State,
      Phone,
      zipCode,
      Approved,
      domesticViolence,
      LGBTQ,
      crisisResources,
      humanTrafficking,
      military,
      lawEnforcement,
      elderSurvivor,
      childSurvivor,
      confidential,
      nonConfidential,
      healthCenter,
      dvProgram,
      psychProgram,
      callpolice,
      advocacyProgram,
      legalAdvice,
      forensicExams,
      generalHealth,
      pregnancy,
      housing,
      collegeOnCampus,
      title9,
      tribal,
      coalition,
      std,
      hivSupport,
      immigrants,
      blindDeaf,
      disabled,
      directCareCo,
      directCareMed,
      directCareOther,
      substanceAbuse,
      missingPersons,
      specialNeeds,
      alternativeCare,
    }),
  });
  const response = await data.json();
  dispatch(updateProviders(response));
  return response
}
export const updateProviders = (provider) => ({
  type: 'UPDATE_PROVIDER',
  payload: provider,
})
export const getProviders = (userId) => async (dispatch) => {
  const response = await fetch(`/api/providers/`);

  if (response.ok) {
    const providers = await response.json();
    dispatch(getProvider(providers));
  } else {
    // Handle error
  }
};
export const getProvider = (providers) => ({
  type: SET_PROVIDERS,
  providers,
});
export const deleteProvider = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/provider/${id}`, {
    method: 'DELETE',
  });
  body: JSON.stringify({
    id})

  if (response.ok) {
    const provider = await response.json();
    dispatch(deleteProviders(provider));
  } else {
    // Handle error
  }

}
export const deleteProviders = (provider) => ({
  type: 'DELETE_PROVIDER',
  payload: provider,
})

const initialState = {
  allProvider: {},
  provider: {},
  provider2: {},
};

export const providerReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case DELETE_PROVIDER:
      return state
    case CREATE_PROVIDER:
      newState = { provider: { ...state.provider } }
      newState.provider[action.payload.id] = action.payload
      return newState
    case UPDATE_PROVIDER:
      newState = { ...state, provider: { ...state.provider } }
      newState.provider[action.payload.id] = action.payload
      return newState
    case READ_PROVIDERS:

      newState = { ...state, allProvider: { ...state.allProvider } }
      newState[action.payload.provider[0].id] = action.payload.provider[0]
      return newState
    case SET_PROVIDERS:
      return { ...state, providers: action.providers };
    case 'SET_PROVIDER':
      return { ...state, provider: action.payload };
    case 'SET_PROVIDER2':
      return { ...state, provider2: action.payload };
    case 'SET_ZIP':
      return { ...state, zipCode: action.payload };
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_ADDRESS':
      return { ...state, address: action.payload };
    case 'SET_PHONE':
      return { ...state, phone: action.payload };
    default:
      return state;
  }
}
export default providerReducer