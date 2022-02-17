import { actionTypes } from "../actionTypes";
const initialState = {
  value: 0,
  navigationBar: false,
  logedIn: false,
  images: [],
  diary: {},
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_NAVIGATION_BAR:
      return { ...state, navigationBar: !state.navigationBar };

    case actionTypes.IS_LOGGED:
      return { ...state, isLogged: action.payload };

    case actionTypes.ADD_IMAGE:
      const filteredWeeks = state.diary.weeks.map((item) => {
        if (item.weekId === action.payload.chosenWeek) {
          return {
            ...item,
            pictures: [
              ...item.pictures,
              {
                picture: action.payload.picture,
                _id: action.payload.picId,
              },
            ],
          };
        } else {
          return item;
        }
      });

      return {
        ...state,
        diary: { ...state.diary, weeks: filteredWeeks },
      };

    case actionTypes.ADD_DIARY:
      return { ...state, diary: action.payload };

    case actionTypes.DELETE_WEEK:
      return {
        ...state,
        diary: {
          ...state.diary,
          weeks: state.diary.weeks.filter(
            (item) => item.weekId !== action.payload
          ),
        },
      };
    case actionTypes.ADD_WEEK:
      console.log("ai aq var da mixaria", action.payload);
      return {
        ...state,
        diary: {
          ...state.diary,
          weeks: [
            ...state.diary.weeks,
            {
              week: action.payload.type,
              weekType: action.payload.type,
              weekId: action.payload.weekId,
            },
          ],
        },
      };

    default:
      return state;
  }
};
