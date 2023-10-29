import axios from "axios";

const initialValue = {
  todos: [],
  isLoading: false,
  error: "",
};

export default function todoReducer(state = initialValue, action) {
  switch (action.type) {
    case "START_FETCHING":
      return {
        ...state,
        isLoading: true,
      };

    case "SUCCESS_GET_TODO":
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };

    default:
      return state;
  }
}

// Kita buat function action untuk merubah isLoading
function startFetching() {
  return {
    type: "START_FETCHING",
  };
}
function successGetTodo(data) {
  return {
    type: "SUCCESS_GET_TODO",
    payload: data,
  };
}

// ini function yang menghandle redux thunk yang memiliki asyncronous
export function getTodo() {
  // dibawah ini adalah function redux thunk,
  // yaitu  mengembalikan /return function anonymous tanpa nama function
  // yang memiliki parameter  dispatch
  return async function (dispatch) {
    // kemudian memiliki sebuah dispatch, yang memanggil sebuah function action
    // dispatch yang memanggil  function startFetching untuk
    // mengubah isLoadingnya menjadi true
    dispatch(startFetching());

    //  kemudian selanjutnya memgfecth api
    // kita harus destructuring untuk mendapatakan datanya langsung
    // karena jika tidak maka data nya masih didalam sebuah
    // data dari axios yang tergabung dengan axios status dan lain lain
    const { data } = await axios(
      `https://652d3ffcf9afa8ef4b271ed7.mockapi.io/todo`
    );
    //  setelah succes fecth data maka  kita buat
    //  handle ketika succes dengan disptach memanggil function
    // succes, kemudian kasih datanya ke function successGetTodo
    dispatch(successGetTodo(data));
  };
}
// ini function yang menghandle redux thunk yang memiliki asyncronous
export function addTodo(newTodo) {
  // dibawah ini adalah function redux thunk,
  // yaitu  mengembalikan /return function anonymous tanpa nama function
  // yang memiliki parameter  dispatch
  return async function (dispatch) {
    // tolong jalankan kembali startFetchingnya
    // kita ubah lagi yang awalanya isLoadingnya kembali ke false
    // setelah melakukan  function getTodo diatas
    // menjadi true kembali
    dispatch(startFetching());
    // kita fetching lagi datanya ,masukan datanya yaitu newTodo kedalam axios
    // kita fetching nya seperti analogi post dara
    // axios ketika post memiliki 2 paramter yaitu url dan data.
    await axios.post(
      `https://652d3ffcf9afa8ef4b271ed7.mockapi.io/todo`,
      newTodo
    );

    // setelah datanya dimasukan, kita fetching lagi untuk mengambil perubahan
    dispatch(getTodo());
  };
}

// import axios from "axios";

// const initialValue = {
//   todos: [],
//   isLoading: false,
//   error: "",
// };

// function todoReducer(state = initialValue, action) {
//   switch (action.type) {
//     case "START_FETCHING":
//       return {
//         ...state,
//         isLoading: true,
//       };
//     case "SUCCESS_GET_TODO":
//       return {
//         ...state,
//         isLoading: false,
//         todos: action.payload,
//       };
//     default:
//       return state;
//   }
// }

// function startFetching() {
//   return {
//     type: "START_FETCHING",
//   };
// }

// function successGetTodo(data) {
//   return {
//     type: "SUCCESS_GET_TODO",
//     payload: data,
//   };
// }

// export function getTodo() {
//   return async function (dispatch) {
//     dispatch(startFetching());

//     const { data } = await axios(
//       "https://652d3ffcf9afa8ef4b271ed7.mockapi.io/todo"
//     );

//     dispatch(successGetTodo(data));
//   };
// }

// export const addTodo = (newTodo) => async (dispatch) => {
//   dispatch(startFetching());

//   await axios.post("https://652d3ffcf9afa8ef4b271ed7.mockapi.io/todo", newTodo);

//   dispatch(getTodo());
// };

// export default todoReducer;
