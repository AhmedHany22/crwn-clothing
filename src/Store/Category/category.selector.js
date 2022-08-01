// It's a func that perform memoaization technique
import { createSelector } from "reselect";

const selectCategoryReducerState = (state) => state.category;

// createSelector first param is the input for the last param
// There can be multible params, if 5 then 4 are inputs for the last which must be func
// The last param the func will only run if any of the first params changed
const selectCategory = createSelector(
  selectCategoryReducerState,
  (categorySlice) => categorySlice.categories
);

export const categorySelector = createSelector(
  selectCategory,
  (categorySliceMap) =>
    categorySliceMap.reduce((accumlator, category) => {
      const { title, items } = category;
      accumlator[title.toLowerCase()] = items;
      return accumlator;
    }, {})
);
