// Syarat utama dalam reducer harus memiliki inisialState
const inisialState = {
  value: 0,
};

// REDUCER INI DIANALOGIKAN SEBAGAI BRANKAS
// Function counterReducer, ini akan dipakai di store.
// dalam function reducers terdapat 2 parameter yaitu state, yang nilainya itu
// diambil dari inisialState. kemudian action untuk menjalankan kondisi di swicth case
export function counterReducers(state = inisialState, action) {
  switch (action.type) {
    // kalo case biasa harus mengembalikan berupa object contoh return {state};
    case "INCREMENT":
      // dalam mengembalikan sebuah return
      return {
        // anda harus memberikan sebuah properti yang namanya itu sama dengan insialState
        // contoh nya disini ada value, kemudian untuk merubah nilainya, kita harus ambil
        // dari state pada function counterReducers, kemudian kita akses valuenya,
        // jadi ibaratkan state itu seperti insialState yang kita mau akses datanya,
        // kemudian ketika sudah dapat data valuenya, kita ubah dia dari awalnya itu 0,
        // menjadi + 1.
        value: state.value + 1,
      };
    // jika kondisi nya itu adalah DECREMENT maka seperti ini
    //  penjelasan sama seperti INCREMENT
    case "DECREMENT":
      return {
        value: state.value - 1,
      };
    // nilai default tidak boleh mengembalikan sebuah object contoh sepert ini return {state}
    // harus seperti di bawah.
    default:
      return state;
  }
}

// ACTION INI DIANALOGIKAN SEBAGAI SURAT PERINTAH /SOP
// ini fungsi action syarat untuk mengeksekusi function reducers diatas,
// jadi jika kita ingin merubah atau mengeksekusi kita perlu menambahkan sebuah action
// contoh: jika ingin membuat sebuat action increment,
// funtion ini mengembalikan sebuah type yaitu string "INCREMENT",
// dan juga ada payload adalah bisa isinya itu berupa data object,
//  di action ada 2 yang bisa dikembalikan yaitu type dan payload .
export function increment() {
  return {
    type: "INCREMENT",
  };
}

// Kita buat SOP/ aturan untuk pengurangan
// sama seperti  action increment diatas
export function decrement() {
  return {
    type: "DECREMENT",
  };
}
