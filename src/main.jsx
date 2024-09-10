import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/main.scss";
import { BrowserRouter } from "react-router-dom";

import Pages from "./pages/pages";

import { Provider } from "react-redux";
import { store } from "./redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Pages />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
