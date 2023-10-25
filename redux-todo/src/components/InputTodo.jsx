import { useState } from "react"


export default function InputTodo() {
    const [inputan, setinputan] = useState("");

    function handleInput (event) {
      setinputan(event.target.value);
    }
    function handleSubmit (event) {
event.preventDefault();
console.log(inputan);
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
