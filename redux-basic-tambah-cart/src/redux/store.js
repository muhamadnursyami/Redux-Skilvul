// import function configureStore dari redux 
import { configureStore } from "@reduxjs/toolkit";
import { counterReducers } from "./reducer/reducer";
// buat sebuah variable untuk  menyimpan, bernama store yang didalamnya
// ada fungsi configureStore, function configureStore
// harus seperti ini  configureStore ({}) ada tanda kurung dan kurung kurawal.
// kemudian tambahkan object  reducer : {}, ini bersifat wajib bawaan dari redux
// baru setelah itu, didalam object reducer isi apapun reducer yang anda buat.
// STORE INI DIANALOGIKAN SEBAGAI BANK
const store = configureStore({
  reducer: {
    // data dari function reducer
    counterReducers,
    // Contoh 2 /lebih reducers, seperti ini
    // taskReducers,
    // loginReducers,

  },
});
// jangan lupa di export
export default store;
