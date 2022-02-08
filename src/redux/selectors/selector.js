export const getNavigationBar = (state) => state.navigationBar;
export const getAddedImages = (state, chosenWeek) =>
  state?.diary?.weeks ? state.diary.weeks[chosenWeek]?.pictures : null;
export const getDiaryWeeksSelector = (state) => state.diary.weeks;
