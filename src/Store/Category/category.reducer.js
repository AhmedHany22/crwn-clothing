import { CATEGORIES_ACTIONS_TYPES } from "./category.types";

// The initial State object
const INITIAL_STATE = { categories: [] };

// ------------------------------ User Reducer ------------------------------
// Func that handle the actions to change the state
export const categoriesReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    // The action case where the reducer modify the state
    case CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES:
      return { ...state, categories: payload };
    // We return the state in the defalt case, because the action is passed to all reducers
    default:
      return state;
  }
};
