import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/reducer/todoReducer";


export default function InputTodo() {
    const dispatch = useDispatch();
    const [inputan, setInputan] = useState("");
    
    function handleSubmit (event) {
        event.preventDefault();
        
        dispatch(addTodo(inputan));
        setInputan("");
    }
  return (
    <div>
            
        <p>
        InputTodo
        </p>
       <form>
       <input type="text" value={inputan} onChange={(event) => setInputan(event.target.value) } />
       <button type="submit" onClick={handleSubmit}>add</button>
       </form>

    </div>
  )
}
