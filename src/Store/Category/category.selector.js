// Selector to get Redux categories Data + The 1 of the patterns that emerge with redux
// The selector is where the reducer specific transformation logic is going to live.
export const categorySelector = (state) =>
  state.category.categories.reduce((accumlator, category) => {
    const { title, items } = category;
    accumlator[title.toLowerCase()] = items;
    return accumlator;
  }, {});
