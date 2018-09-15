import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { reducers, buildRootReducer } from "./index";
import { normalizePayload } from "../middlewares/normalizePayload";
import { replaceInitialStateReconciler } from "./replaceInitialStateReconciler";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export const configureStore = () => {
  const createStoreWithMiddleware = composeEnhancers(
    applyMiddleware(thunk, normalizePayload)
  )(createStore);

  const purchaseAppReducer = buildRootReducer(reducers);
  const purchaseAppPersistConfig = {
    key: "purchaseApp",
    storage,
    stateReconciler: replaceInitialStateReconciler
  };

  const store = createStoreWithMiddleware(
    persistReducer(purchaseAppPersistConfig, purchaseAppReducer)
  );

  const persistor = persistStore(store);

  if (module.hot) {
    module.hot.accept("./index", () => {
      const nextRootReducer = require("./index"); // eslint-disable-line
      setTimeout(() => {
        store.replaceReducer(buildRootReducer(nextRootReducer.reducers));
      });
    });
  }

  window.store = store;
  return { store, persistor };
};
