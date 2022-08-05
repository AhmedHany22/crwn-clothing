import { CATEGORIES_ACTIONS_TYPES } from "./category.types";
import { actionCreator } from "../../Utils/Reducer/reducer.utils";
import { getCategoriesAndDocuments } from "./../../Utils/Firebase/firebase.utils";

// The 3 states of calling the API functions that will handle the dispatch
const fetchCategoriesStart = () => {
  return actionCreator(CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES_START);
};
const fetchCategoriesSucces = (categories) => {
  return actionCreator(
    CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES_SUCCESS,
    categories
  );
};
const fetchCategoriesFailed = (error) => {
  return actionCreator(CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES_FAILED, error);
};

// The thunk action which return a func that get dispatch
// Redux recommend to add keyword "Async" at the end of the thunk action
// It's an implementation of separation of concerns
export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const categories = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesSucces(categories));
  } catch (e) {
    dispatch(fetchCategoriesFailed(e));
  }
};
