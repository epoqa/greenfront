import { actionTypes } from "../actionTypes";
const initialState = {
  value: 0,
  navigationBar: false,
  logedIn: false,
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_NAVIGATION_BAR:
      return { ...state, navigationBar: !state.navigationBar };

    case "LOG_IN":
      return { ...state, logedIn: action.payload };
    default:
      return state;
  }
};
