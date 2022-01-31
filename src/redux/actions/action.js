import { actionTypes } from "../actionTypes";

export const addDiaryAction = (payload) => ({
  type: actionTypes.ADD_DIARY,
  payload,
});

export const getDataFromBackAction = (payload) => ({
  type: actionTypes.GET_DATA_FROM_DB,
  payload,
});

export const toggleNavigationBar = () => ({
  type: actionTypes.TOGGLE_NAVIGATION_BAR,
});


export const loggedInUser = (payload) => {
  return {
    type: "LOG_IN",
    payload,
  };
};

