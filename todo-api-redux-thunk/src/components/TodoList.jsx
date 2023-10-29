import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addTodo, getTodo } from "../redux/reducers/todo-reducers";


export default function TodoList() {

  const dispatch = useDispatch();
  // untuk mengecek apakah isLoading berubah  menggunakan useSelector
  const {isLoading, todos} = useSelector((state) => state.todo);
  // console.log(isLoading, todos);
  // kita hanya ingin memanggil function getTodo hanya 
  // sekali render saja, maka menggunakan useEffect
  const [inputan, setInputan] = useState("");
 
  useEffect(() => {
    dispatch(getTodo());
  }, []);

  function handleSubmit (event) {
    event.preventDefault();
    // console.log(inputan)
    // kita siapin dulu object untuk menampung todonya 
    let newTodo = {
      value : inputan,
      status : false
    }
    dispatch(addTodo(newTodo))
  }

  
  
  return (
    <div>
      <form>
        <input type="text" value={inputan} onChange={(e) => setInputan(e.target.value)}/>
        <button type="submit" onClick={handleSubmit}>add</button>
      </form>

      <div>
      <div>
        {isLoading ? (
          <div>loading...</div>
        ) : (
          todos.map((todo) => (
            <div key={todo.id}>
              <span>{todo.value}</span>
              <button>✏️</button>
              <button>❌</button>
            </div>
          ))
        ) }
      </div>
      </div>

    </div>
  )
}

