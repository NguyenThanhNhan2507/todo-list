import { combineReducers } from "redux";

import listReducer from "./ListReducer";

const rootReducer = combineReducers({
  tasks: listReducer,
});

export default rootReducer;
