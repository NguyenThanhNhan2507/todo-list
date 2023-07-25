import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer/IndexReducer";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: true,
});

export default store;
