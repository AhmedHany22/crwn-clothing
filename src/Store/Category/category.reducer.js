import { CATEGORIES_ACTIONS_TYPES } from "./category.types";

// The initial State object
const INITIAL_STATE = { categories: [], isLoading: false, error: null };

// ------------------------------ User Reducer ------------------------------
// Func that handle the actions to change the state
export const categoriesReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    // The 3 states of calling the API
    case CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES_START:
      return { ...state, isLoading: true };
    case CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES_SUCCESS:
      return { ...state, isLoading: false, categories: payload };
    case CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES_FAILED:
      return { ...state, isLoading: false, error: payload };
    // We return the state in the defalt case, because the action is passed to all reducers
    default:
      return state;
  }
};
