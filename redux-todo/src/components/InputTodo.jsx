import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/reducer/reducer";


export default function InputTodo() {
  const dispatch= useDispatch();
    const [inputan, setinputan] = useState("");

    function handleInput (event) {
      setinputan(event.target.value);
    }


    function handleSubmit (event) {
    event.preventDefault();
    dispatch(addTodo(inputan));
    setinputan("");
    }
  return (
    <div> 
        <h2>Todolist </h2>
    <form>
      <input type="text" value={inputan}  onChange={handleInput} />
      <button onClick={handleSubmit}> add</button>
    </form>
    </div>
  )
}
