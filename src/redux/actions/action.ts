import { actionTypes } from "../actionTypes";

export const addDiaryAction = (payload: any) => {
  type: actionTypes.ADD_DIARY;
  payload;
};

export const getDataFromBackAction = (payload: any) => {
  type: actionTypes.GET_DATA_FROM_DB;
  payload;
};
