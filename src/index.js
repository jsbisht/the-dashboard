import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./utility/store/configureStore";
import TestPad from "./components/layout-components/testpad/TestPad";

// pass initial state here
// also initial value is alread set for the configureStore()
const store = configureStore();

render(
  <Provider store={store}>
    <TestPad />
  </Provider>,
  document.getElementById("app")
);
