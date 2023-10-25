import { useSelector } from "react-redux"

export default function Todo() {
  const {todos} = useSelector((state) => state.todoReducers);
console.log(todos);
  return (
    <div>
     

      {todos.map((item) =>
        <div key={item.id}>
        <span> {item.value} </span>
        <button>Edit</button>
        <button>❌</button>
      </div>
      )}
      
      {/* <div>
        <span> belajar </span>
        <button>Edit</button>
        <button>❌</button>
      </div>

      <div>
        <span> GO TO GYMMMMMMMMM </span>
        <button>Edit</button>
        <button>❌</button>
      </div> */}
      

    </div>
  )
}
