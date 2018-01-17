import actionTypes from "./Types";

export function addTodo(text) {
  return {
    type: actionTypes.ADD_TODO,
    payload: { text }
  };
}

export function deleteTodo(id) {
  return {
    type: actionTypes.DELETE_TODO,
    payload: { id }
  };
}

export function deleteCompletedTodos() {
  return {
    type: actionTypes.DELETE_COMPLETED_TODOS,
    payload: null
  };
}

export function toggleTodo(id) {
  return {
    type: actionTypes.TOGGLE_TODO,
    payload: { id }
  };
}

export function toggleAllTodos() {
  return {
    type: actionTypes.TOGGLE_ALL_TODOS,
    payload: null
  };
}

export function setFilter(filter) {
  return {
    type: actionTypes.SET_FILTER,
    payload: { filter }
  };
}
