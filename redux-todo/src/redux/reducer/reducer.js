// syarat reducer
// inisial state
const inisialState = {
  todos: [
    { id: 1, value: "belajar react" },
    { id: 2, value: "belajar redux" },
  ],
};
// function todo reducer

export function todoReducers(state = inisialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
// action
