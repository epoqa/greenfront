import { actionTypes } from "../actionTypes";
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


export default loggedReducer;