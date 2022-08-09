import { CATEGORIES_ACTIONS_TYPES } from "./category.types";
import { actionCreator } from "../../Utils/Reducer/reducer.utils";

// The 3 states of calling the API functions that will handle the dispatch
export const fetchCategoriesStart = () => {
  return actionCreator(CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES_START);
};
export const fetchCategoriesSucces = (categories) => {
  return actionCreator(
    CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES_SUCCESS,
    categories
  );
};
export const fetchCategoriesFailed = (error) => {
  return actionCreator(CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES_FAILED, error);
};
