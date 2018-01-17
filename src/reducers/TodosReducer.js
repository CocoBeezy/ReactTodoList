import _ from "lodash";
import actionTypes from "../actions/Types";

const init_state = {
  items: [],
  counter: 0,
  filter: "all"
};

export default function(state = init_state, action) {
  const { payload } = action;
  let _items, todo, index;

  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        items: [
          ...state.items,
          { id: state.counter, text: payload.text, completed: false }
        ],
        counter: state.counter + 1
      };

    case actionTypes.DELETE_TODO:
      _items = state.items.filter(item => item.id !== payload.id);
      return {
        ...state,
        items: _items
      };

    case actionTypes.DELETE_COMPLETED_TODOS:
      _items = state.items.filter(item => !item.completed);
      return {
        ...state,
        items: _items
      };

    case actionTypes.TOGGLE_TODO:
      index = _.findIndex(state.items, item => item.id === payload.id);
      _items = state.items.slice();
      _items[index].completed = !_items[index].completed;
      return { ...state, items: _items };

    case actionTypes.TOGGLE_ALL_TODOS:
      let allSelected = state.items.reduce(
        (accumulator, { completed }) => accumulator && completed,
        true
      );
      if (allSelected) {
        _items = state.items.map(item => {
          item.completed = false;
          return item;
        });
      } else {
        _items = state.items.map(item => {
          item.completed = true;
          return item;
        });
      }

      return { ...state, items: _items };

    case actionTypes.SET_FILTER:
      return { ...state, filter: payload.filter };
  }

  return state;
}
