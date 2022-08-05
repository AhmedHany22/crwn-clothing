import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import thunk from "redux-thunk";
import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";

import { rootReducer } from "./rootReducer";

// Applying a middleware "Logger" to log every change on the redux state
// Disabling the middleware "Logger" in production mode
const middlewares = [
  process.env.Node_ENV !== "production" && logger,
  thunk,
].filter(Boolean);

// Enabling the REDUX_DEV tool in Non production mode
const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

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
