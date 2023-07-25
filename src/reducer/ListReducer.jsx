//import actions for a task
import * as task from "../actions/TypesAtion";

export const initialState = {
  tasks: [],
};

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case task.ADD_TODO:
      let temp = [...state.tasks];
      temp.unshift(...action.payload);
      return { ...state, tasks: temp };

    case task.READ_TODO:
      let temp2 = [...state.tasks];
      temp2.unshift(...action.payload);
      return { ...state, task: temp2 };

    case task.UPDATE_TODO:
      let a = [...state.tasks];

      a = a.map((itm) =>
        itm.id == action.payload.id ? { ...itm, ...action.payload } : itm
      );

      return { ...state, tasks: a };

    case task.DELETE_TODO:
      const newTasks = state.tasks.filter(
        (task) => task.id !== action.payload.id
      );
      return { ...state, tasks: newTasks };

    default:
      return state;
  }
}
