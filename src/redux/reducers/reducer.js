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
        if (item._id === action.payload.id) {
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
            (item) => item._id !== action.payload
          ),
        },
      };

    default:
      return state;
  }
};
