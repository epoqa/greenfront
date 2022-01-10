//REDUX
interface Action {
  type: String;
  payload: any;
}

const initialState = {
  value: 0,
};

export const counterReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "rame":
      return state;

    default:
      return state;
  }
};
