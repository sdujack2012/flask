import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "bootstrap/dist/css/bootstrap.min.css"; // tslint:disable-line
import { AppComponent } from "./components/app";
import { configureStore } from "./store";

const perisistStore = configureStore();

ReactDOM.render(
  <Provider store={perisistStore.store}>
    <PersistGate loading={null} persistor={perisistStore.persistor}>
      <AppComponent />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
