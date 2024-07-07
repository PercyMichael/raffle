
// store/reducers.jsx
import { combineReducers } from 'redux';
import { LOGIN, LOGOUT, SET_SELECTED_RAFFLE } from './actions';

const initialState = {
  authToken: null,
  selectedRaffleId: null,
  userData: {},
  anyData: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        authToken: action.payload.authToken,
        userData: action.payload.userData,
      };
    case LOGOUT:
      return {
        ...state,
        authToken: null,
        userData: {},
      };
      case SET_SELECTED_RAFFLE:
        return {
          ...state,
          selectedRaffleId: action.payload,
        }
    default:
      return state;
  }
};

export default combineReducers({
  auth: authReducer,
});

