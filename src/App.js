import Header from './Components/Header'
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask';
import React, { useState, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid'
import Swal from 'sweetalert2'

function App() {
  const [tasks, setTasks] = useState([])
  const [showAddTask, setShowAddTask] = useState(false)

  const addTask = (task) => {
    const id = uuidv4()
    const newTask = { id, ...task}
    setTasks([ ...tasks, newTask])
    Swal.fire({
      icon: 'success',
      title: 'Hell Yeah',
      text: 'You have successfully added a new task!'
    })
  } 

  const delteTask = (id) => {
    const delteTask = tasks.filter((task) => task.id !== id)
    setTasks(delteTask)
    Swal.fire ({
      icon: 'success',
      title: 'Oops...',
      text: 'You have successfully delted a task'
    })
  }







  return (
    <>
      <div className="Container">
        <Header showForm={() => setShowAddTask(!showAddTask)} changeText={showAddTask}/>
        {showAddTask && <AddTask onSave={AddTask} />}

        {
          tasks.length > 0 ?
          (<Tasks tasks={tasks} />) :
          ('No Task Found!')
        }
      </div>
    </>
  );
}

export default App;
