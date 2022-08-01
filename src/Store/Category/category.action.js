import { CATEGORIES_ACTIONS_TYPES } from "./category.types";
import { actionCreator } from "../../Utils/Reducer/reducer.utils";

// The function which will handle the dispatch
export const setCategories = (categories) => {
  return actionCreator(CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES, categories);
};
