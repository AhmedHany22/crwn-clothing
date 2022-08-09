import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";

import { rootReducer } from "./rootReducer";
import { rootSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

// Applying a middleware "Logger" to log every change on the redux state
// Disabling the middleware "Logger" in production mode
const middlewares = [
  process.env.Node_ENV !== "production" && logger,
  sagaMiddleware,
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

// Strart the Saga generator functions
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;
