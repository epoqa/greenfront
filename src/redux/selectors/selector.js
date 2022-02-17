export const getNavigationBar = (state) => state.navigationBar;
export const getAddedImages = (state, chosenWeek) => {
  return state?.diary?.weeks
    ? state.diary.weeks.filter((week) => week.weekId === chosenWeek)[0]
        ?.pictures
    : null;
};

export const getDiaryWeeksSelector = (state) => state.diary.weeks;
