// tanda ! / merah adalah sebuah code yang awalnya di eksekusi 
// tetapi untuk mengatasi problem karena menggunakan useState
// untuk mensolve problem bentrok nilai , maka harus dicomment  jika tidak menggunakan useState
// maka kode  yang tanda ! / merah dapat di gunaka dan di aktifkan.
// dan masing penting untuk pembelajaran.
import { useDispatch } from "react-redux"
// !import {  useSelector } from "react-redux"
import { decrement, increment } from "../redux/reducer/reducer";
import { useState } from "react";


export default function Counter() {
  // karena nilai nya itu number , maka nilai awalnaya itu 0
  // mengikuti content  maunya apa.
  const [counter, setCounter] = useState(0)
  // useDispatch di ANALOGIKAN SEPERTI  PETUGAS BANK
  // disptach ini adalah sebuah fungsi untuk melakukan sebuah tindakan 
  // yang tindakan itu perlu sebuah aksi atau action yang dianalogikan seperti 
  // surat perintah untuk menjalankan sebuah function counterReducers
  const dispatch = useDispatch();
  // useSelector untuk mengambil nilai state,
  // nama dari variable dibawah ini yaitu const {value}
  // itu harus sama dengan isi dari inisialState dan pakai tanda {}
  // maka langsung di destructuring sehingga langsung dapat datanya
  // jika tidak memakai tanda {} maka data tersebut masih diluar object dari
  // dari data value.
  // useSelector terdapat callback seperti(state) =>, ini yang disebut callback ,
  // yang isi nya itu wajib state parameternya, dan tentukan state mana yang mau diambil
  // contoh dibawah yaitu state.counterReducers.
  // bisa  juga hanya dengan state aja tapi itu akan berbentuk sebuah object  reducer 
  // contoh  data yang didapatkan jika menggunakan state doang
  // tidak spesifik state mana yang ingin diambil 
  // seperti ini tampilanya =  reducers : {counterReducers, stateLain1, stateLain2}
  // data state lain akan  juga di tampilkan atau bisa dibilang sebuah data state
  // !const {value} = useSelector((state) => state.counterReducers);
  // console.log(data);
 
  function handleIncrement (){
     // jika user menclik tombol  +
  // maka dispatch memanggilkan sebuah function increment ()
  // untuk menjalankan function counterReducers sehingga akan masuk
  // kedalam case "INCREMENT" dan melakukan sebuah aktivitas
  // contonya disini adalah penambahan.
  setCounter(counter+1)
    dispatch(increment());
  }
  // penjelasanya sama dengan function handleIncrement
  function handleDecrement () {
    setCounter(counter-1)
    dispatch(decrement());
  }
  return (
    <div>
        <button onClick={handleDecrement}>-</button>
        {/* jadi yang awalnya itu isi span nya  adalah value seperti ini : {value}
          yang diambil dari reducers, menjadi counter agar
          nilai counternya tidak menjadi bentrok, meskipun component counter dipakai lagi.
          karena nilai counter dipakai di component ini saja, sedangkan
          value dipakai disemua tempat jika dibutuhkan maka dari itu 
          nilainya di pisah antara counter dan value
        */}
        {/* <span >{value}</span> */}
        <span >{counter}</span>
        <button onClick={handleIncrement}>+</button>
    </div>
  )
}
