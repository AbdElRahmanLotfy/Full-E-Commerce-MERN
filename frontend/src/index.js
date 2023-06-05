import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import Store from "./redux/store";

const container = document.getElementById("root");

const root = createRoot(container);
root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);

// ReactDOM.render(
// <Provider store={Store}>
//   <App />
// </Provider>,
//   document.getElementById("root")
// );

reportWebVitals();
