import { actionTypes } from "../actionTypes";
const initialState = {
  value: 0,
  navigationBar: false,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_NAVIGATION_BAR:
      return { ...state, navigationBar: !state.navigationBar };

    default:
      return state;
  }
};
