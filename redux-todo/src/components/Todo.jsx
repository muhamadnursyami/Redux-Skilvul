import { useDispatch, useSelector } from "react-redux"
import { deleteTodo } from "../redux/reducer/reducer";

export default function Todo() {
  const dispatch = useDispatch();
  const {todos} = useSelector((state) => state.todoReducers);
console.log(todos);

const handleDelete = (id) => {
  dispatch(deleteTodo(id))
}
  return (
    <div>
     

      {todos.map((item) =>
        <div key={item.id}>
        <span> {item.value} </span>
        <button>Edit</button>
        <button onClick={()=> handleDelete(item.id)}>❌</button>
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
