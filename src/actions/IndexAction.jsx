import axios from "axios";
import { ADD_TODO, DELETE_TODO, READ_TODO, UPDATE_TODO } from "./TypesAtion";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createTASK = (data) => ({
  type: ADD_TODO,
  payload: data,
});

export const readTASK = (data) => ({
  type: READ_TODO,
  payload: data,
});

export const updateTASK = (data) => ({
  type: UPDATE_TODO,
  payload: data,
});

export const deleteTASK = (id) => {
  return async (dispatch) => {
    try {
      await deleteTodos(id);
      dispatch({ type: DELETE_TODO, payload: { id } });
    } catch (error) {
      console.log(error);
    }
  };
};

export function fetchTodos() {
  return async (dispatch) => {
    await axios
      .get("https://64bdea0c2320b36433c7e526.mockapi.io/todos")
      .then((response) => response.data)
      .then((response) => {
        dispatch(createTASK(response));
      });
  };
}

export function putTodos(data) {
  return async (dispatch) => {
    await axios
      .put(`https://64bdea0c2320b36433c7e526.mockapi.io/todos/${data.id}`, data)
      .then((response) => response.data)
      .then((response) => {
        dispatch(updateTASK(response));
      });
  };
}

export function postTodos(data) {
  return async (dispatch) => {
    await axios
      .post("https://64bdea0c2320b36433c7e526.mockapi.io/todos", data)
      .then((response) => response.data)
      .then((response) => {
        dispatch(createTASK([response]));
      });
  };
}

export function deleteTodos(id) {
  return async (dispatch) => {
    await axios
      .delete(`https://64bdea0c2320b36433c7e526.mockapi.io/todos/${id}`)
      .then(() => {
        dispatch(deleteTASK(id));
      });
  };
}

export function checkTodo(id, completed) {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `https://64bdea0c2320b36433c7e526.mockapi.io/todos/${id}`,
        { completed }
      );
      console.log(response.data);
      dispatch(updateTASK(response.data));
    } catch (error) {
      console.error(error);
    }
  };
}
