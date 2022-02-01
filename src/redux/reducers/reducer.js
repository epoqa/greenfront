import { actionTypes } from "../actionTypes";
const initialState = {
  value: 0,
  navigationBar: false,
  logedIn: false,
  images: [],
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_NAVIGATION_BAR:
      return { ...state, navigationBar: !state.navigationBar };

    case actionTypes.IS_LOGGED:
      return { ...state, isLogged: action.payload };

    case actionTypes.ADD_IMAGE:
      console.log(action.payload);
      return { ...state, images: [...state.images, action.payload] };

    default:
      return state;
  }
};
