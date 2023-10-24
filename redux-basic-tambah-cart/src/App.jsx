import Counter from "./components/Counter"
import Cart from "./components/cart"

function App() {
 

  return (
    <>
     <nav style={{textAlign:"center"}}>
      <Cart/>
     </nav>
     {/* ada masalah ketika membuat 2 counter sekaligus
      maka counter buku ketika diklik, maka counter pena pun 
      mengikuti nilai dari si counter buku. maka harus 
      disolve  setiap counter dibedain, tetapi di cart nya itu
      mengikuti 2 couter yaitu buku dan pena berapa pun jumlahnya,
      dengan menggunakan tambahan state sehingga
      perubahan secara keselurahan akan nampak 
      di cart komponen tetapi di card counter tidak akan nampak
      karena data ketika user diklik akan di tampung kedalam state
      tidak seperti awal tadi , datanya itu langsung di ambil dari
      perubahan dari function counterReducers.
     */}
     <div style={{textAlign:"center"}}>
      <span>buku :</span>
        <Counter/>
     </div>
     <div style={{textAlign:"center"}}>
      <span>pena :</span>
        <Counter/>
     </div>
    </>
  )
}

export default App
