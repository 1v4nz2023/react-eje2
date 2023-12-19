import TaskList from './TaskList'
import TaskForm from './TaskForm'
import {data} from './tasks'
import {useState,useEffect} from 'react'
import './App.css'

function App(){
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
      setTasks(data)
  },[])

  function createTask(taskTitle){
    setTasks([...tasks, {
      title: taskTitle,
      id: tasks.length,
    }])
  }

  function deleteTask(taskId){
    setTasks(tasks.filter(task => task.id !== taskId)
    )
  }

  function clearAll(){
    setTasks([])
  }

  return (

  <div className='contenedor-tareas'>
    <h1>Todo App</h1>
    <TaskForm createTask={createTask}/>
    <TaskList tasks={tasks} deleteTask={deleteTask} clearAll={clearAll}/>
  </div>    
  )
}

export default App