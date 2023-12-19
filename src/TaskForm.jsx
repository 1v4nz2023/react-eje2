import {useState} from 'react'
import { FaRegPlusSquare } from "react-icons/fa";


function TaskForm({createTask}) {

    const [title, setTitle] = useState("")
    const leerInput = (e)=>setTitle(e.target.value);
    const handleSubmit = (e)=>{
        e.preventDefault()

        if (title === ''){
            alert("No puede ingresar tareas en blanco")
        }

        else{
            createTask(title)
            setTitle('')
        }


    }


  return (
      <form className="form"
       onSubmit={handleSubmit}>
        <input placeholder="Escribe tu tarea" 
        onChange={leerInput}
        value={title}
        autoFocus
        className="input"
        />
        <button className="btn btn-success btn-lg agregar"><FaRegPlusSquare />
</button>
      </form>
  )
}

export default TaskForm
