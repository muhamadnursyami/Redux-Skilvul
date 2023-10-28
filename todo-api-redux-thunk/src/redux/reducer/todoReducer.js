// insial state
const inisialState = {
  todos: [
    { id: 1, value: "belajar javascript" },
    { id: 2, value: "belajar reactjs" },
  ],
};
// function reducer
// variable untuk handle id supaya berurut
// let idTodo = inisialState.todos[1].id;
// idTodo++;
export function todoReducer(state = inisialState, action) {
  switch (action.type) {
    // Case todo untuk  id nya bisa gini
    // case "ADD_TODO": {
    //   const newTodo = {
    //     id: idTodo++,
    //     value: action.payload,
    //   };
    //   const gabungData = [...state.todos, newTodo];
    //   return {
    //     todos: gabungData,
    //   };
    // }
    // atau gini
    // Case todo untuk  id nya bisa gini
    case "ADD_TODO": {
      const newTodo = {
        id: Date.now(),
        value: action.payload,
      };
      const gabungData = [...state.todos, newTodo];
      return {
        todos: gabungData,
      };
    }
    case "DELETE_TODO": {
      const filterTodo = state.todos.filter(
        (item) => action.payload != item.id
      );
      return {
        todos: filterTodo,
      };
    }
    default:
      return state;
  }
}
// action
// buat action untuk nambah addTodo
export function addTodo(inputan) {
  return {
    type: "ADD_TODO",
    payload: inputan,
  };
}

export function deleteTodo(id) {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
}
