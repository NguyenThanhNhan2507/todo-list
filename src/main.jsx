import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

import App from "./App";
import store from "./store";

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(
  <Provider store={store}>
    <App />
  </Provider>
);
