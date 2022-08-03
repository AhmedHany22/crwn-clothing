import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";

import { rootReducer } from "./rootReducer";

// Applying a middleware "Logger" to log every change on the redux state
const middlewares = [logger];
const composedEnhancers = compose(applyMiddleware(...middlewares));

// Applying persist library to save the redux state in Ram
const persistConfig = { key: "root", storage, blacklist: ["user", "category"] };
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Creating the actual store
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);
export const persistor = persistStore(store);

export default store;
