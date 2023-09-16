import React, { useState } from "react";

export default function Todo(props) {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])
    
    const changeHandler = (e) => {
        setTodo(e.target.value)
        // console.log(todo)
    }
    const addTodo = () => {
        setTodos([...todos, todo])
        console.log(todos)
    }
  return (
    <>

      <div className="App">
        <h1>{props.hd}</h1>
        <input type="text" onChange={changeHandler} placeholder="Add Todo" />
        <button onClick={addTodo} >Add</button>
        <div>
            {
                todos.map((val,id)=> {
                    return(
                        <div key={id}>{val}</div>
                    )
                })
            }
        </div>
      </div>
    </>
  );
}
