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
    // kenapa case nay harus ada tanda {}
    // contoh CASE "ADD_TODO : {}"
    // penjelasan : https://bobbyhadz.com/blog/eslint-no-case-declaration-unexpected-lexical-declaration-in-case-block
    case "ADD_TODO": {
      const newTodo = {
        id: Date.now(),
        value: action.payload,
      };
      const gabungTodo = [...state.todos, newTodo];
      // jika ada suatu case kita wajib, mengisikan  return nya itu
      // harus berisi sebuah object yang memiliki properti namanya itu
      // sama dengan yang kita ubah, contohnya disi, kenapa nama propertinya
      // itu todos, karena yang kita ingin tambahkan itu adalah todos nya di inisial state
      // dan kita isikan valuenya dari pengabunggan data diatas.
      return {
        todos: gabungTodo,
      };
    }
    case "DELETE_TODO": {
      const filterTodo = state.todos.filter(
        (item) => item.id != action.payload
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

// BISA JUGA SEPERTI INI YANG SAYA BUAT SENDIRI UNTUK
// HANDLE ID TODOS
// insial state
// const inisialState = {
//   todos: [
//     { id: 1, value: "belajar javascript" },
//     { id: 2, value: "belajar reactjs" },
//   ],
// };
// function reducer
// variable untuk handle id supaya berurut
// let idTodo = inisialState.todos[1].id;
// idTodo++;
// export function todoReducer(state = inisialState, action) {
//   switch (action.type) {
//     // Case todo untuk  id nya bisa gini
//     // case "ADD_TODO": {
//     //   const newTodo = {
//     //     id: idTodo++,
//     //     value: action.payload,
//     //   };
//     //   const gabungData = [...state.todos, newTodo];
//     //   return {
//     //     todos: gabungData,
//     //   };
//     // }
//     // atau gini
//     // Case todo untuk  id nya bisa gini
//     case "ADD_TODO": {
//       const newTodo = {
//         id: Date.now(),
//         value: action.payload,
//       };
//       const gabungData = [...state.todos, newTodo];
//       return {
//         todos: gabungData,
//       };
//     }
//     case "DELETE_TODO": {
//       const filterTodo = state.todos.filter(
//         (item) => action.payload != item.id
//       );
//       return {
//         todos: filterTodo,
//       };
//     }
//     default:
//       return state;
//   }
// }
// // action
// // buat action untuk nambah addTodo
// export function addTodo(inputan) {
//   return {
//     type: "ADD_TODO",
//     payload: inputan,
//   };
// }

// export function deleteTodo(id) {
//   return {
//     type: "DELETE_TODO",
//     payload: id,
//   };
// }
