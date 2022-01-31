import { actionTypes } from "../actionTypes";
import { combineReducers } from "redux";
import { loggedInUser } from '../actions/action'
const initialState = {
  value: 0,
  navigationBar: false,
};
const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return state = action.payload
    case false:
      return state = false;
    default:  
      return state
  }

};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_NAVIGATION_BAR:
      return { ...state, navigationBar: !state.navigationBar };

    default:
      return state;
  }
};

const allReducers = combineReducers({
  isLogged: loggedReducer,
  counter: counterReducer,
});

export default allReducers;