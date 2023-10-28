import { useDispatch, useSelector } from "react-redux"
import { deleteTodo } from "../redux/reducer/todoReducer";


export default function Todo() {
    const dispatch = useDispatch();
    const {todos} = useSelector((state) => state.todoReducer);
    console.log(todos);

    function handelDelete (id) {
        console.log(id);
        dispatch(deleteTodo(id));
    }
    
  return (
    <>
    {todos.map((item) => 
    <div key={item.id}>
    <span>{item.value}</span>
    <button>Edit</button>
    <button onClick={() => handelDelete(item.id)}> delete</button>
</div>
    )}
    
    {/* <div>
        <span>Tugas React</span>
        <button>Edit</button>
        <button> delete</button>
    </div> */}
    </>
  )
}
