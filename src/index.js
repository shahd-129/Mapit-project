import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./i18n";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./Redux/Store/Store";
import StyleWrapper from "./StyleWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <StyleWrapper>
        <App />
      </StyleWrapper>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
