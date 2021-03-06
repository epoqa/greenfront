import { actionTypes } from "../actionTypes";

export const addDiaryAction = (payload) => ({
  type: actionTypes.ADD_DIARY,
  payload,
});

export const toggleNavigationBar = () => ({
  type: actionTypes.TOGGLE_NAVIGATION_BAR,
});

export const loggedInUser = (payload) => {
  return {
    type: actionTypes.IS_LOGGED,
    payload,
  };
};
export const addImage = (payload) => {
  return {
    type: actionTypes.ADD_IMAGE,
    payload,
  };
};

export const deleteWeekAction = (payload) => {
  return {
    type: actionTypes.DELETE_WEEK,
    payload,
  };
};
export const addWeekAction = (payload) => {
  return {
    type: actionTypes.ADD_WEEK,
    payload,
  };
};
export const addCommentAction = (payload) => {
  return {
    type: actionTypes.ADD_COMMENT,
    payload,
  };
};
export const deleteCommentAction = (payload) => {
  return {
    type: actionTypes.DELETE_COMMENT,
    payload,
  };
};
