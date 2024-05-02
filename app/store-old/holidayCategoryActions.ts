export const SET_HOLIDAY_CATEGORY = 'SET_HOLIDAY_CATEGORY';

export const setHolidayCategory = (category: string) => ({
  type: SET_HOLIDAY_CATEGORY,
  payload: category,
});
