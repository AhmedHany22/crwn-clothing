import { all, call, put, takeLatest } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "./../../Utils/Firebase/firebase.utils";
import { CATEGORIES_ACTIONS_TYPES } from "./category.types";
import {
  fetchCategoriesSucces,
  fetchCategoriesFailed,
} from "./category.action";

// It's similar to dispatching {fetchCategoriesStart};
export function* fetchCategoriesAsync() {
  try {
    // {yield} is similar to {await} but it needs {call} to turn any func into effect
    // {call} has 2 params the method to call & the params of that method
    const categories = yield call(getCategoriesAndDocuments, "categories");

    // {put} is a replacement for {dispatch} in the generator func
    yield put(fetchCategoriesSucces(categories));
  } catch (e) {
    yield put(fetchCategoriesFailed(e));
  }
}

export function* onFetchCategories() {
  // {takeLatest} if it take multible same action it will yeild the latest
  yield takeLatest(
    CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  // {all} func will run its content first then continue
  yield all([call(onFetchCategories)]);
}
export default categoriesSaga;
