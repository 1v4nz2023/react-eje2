
import TaskCard from "./TaskCard"

function TaskList({tasks, deleteTask, clearAll}) {

 
  return (
    <div>
      
        {
                tasks.map((task)=>(
                    <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
                ))
        }

    <div className="tareas-pendientes"><h3>Tienes {tasks.length} tareas pendientes</h3>
    <button className="btn btn-primary btn-lg" onClick={()=>clearAll()}>Limpiar</button>
    </div>
    </div>
  )
}

export default TaskList

