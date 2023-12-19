
import { FaTrash } from "react-icons/fa";




function TaskCard({task, deleteTask}) {

  return (
    <div className="contenedor-actividades">
    <h2>{task.title}</h2>
    <button className="eliminar" onClick={()=>deleteTask(task.id)}><FaTrash />
</button>
</div>
  )
}

export default TaskCard
