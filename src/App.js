import Header from './Components/Header'
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask';
import React, { useState, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid'
import Swal from 'sweetalert2'

function App() {
  const [tasks, setTasks] = useState([])
  const [showAddTask, setShowAddTask] = useState(false)
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3500)
  }, [])

  const getTasks = JSON.parse(localStorage.getItem("taskAdded"))
  useEffect(() => {
    if(getTasks == null) {
      setTasks([])
    }else {
      setTasks(getTasks)
    }
  })

  const addTask = (task) => {
    const id = uuidv4()
    const newTask = { id, ...task}
    setTasks([ ...tasks, newTask])
    Swal.fire({
      icon: 'success',
      title: 'Hell Yeah',
      text: 'You have successfully added a new task!'
    })
    localStorage.setItem("taskAdded", JSON.stringify([...tasks, newTask]))
  } 

  const delteTask = (id) => {
    const delteTask = tasks.filter((task) => task.id !== id)
    setTasks(delteTask)
    Swal.fire ({
      icon: 'success',
      title: 'Oops...',
      text: 'You have successfully delted a task'
    })
    localStorage.setItem("taskAdded", JSON.stringify(delteTask))
  }

  const editTask = (id) => {
    const text = prompt("Task Name")
    const day = prompt("Day and Time")
    let data = JSON.parse(localStorage.getItem('TaskAdded'))
    const myData = data.map(x => {
      if (x.id === id) {
        return {
          ...x,
          text: text,
          day: day,
          id: uuidv4()
        }
      }
      return x
    })
    Swal.fire({
      icon: 'success',
      title: 'Hell yeah...',
      text: "you have usccessfully edited an existing task!"
    })
    localStorage.setItem("taskAdded", JSON.stringify(myData))
    window.location.reload()
  }





  return (
    <>
        {
        loading ?
          <div className="spinnerContainer">
            <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-success" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
          </div> :
          <div className="container">
            {/* App Header that has open and App Name */}
            <Header showForm={() => setShowAddTask(!showAddTask)} changeTextAndColor={showAddTask} />
              {/* Revealing of Add Task Form */}
              {showAddTask && <AddTask onSave={addTask} />}
              {/* Task Counter */}
              <h3>Number of Tasks: {tasks.length}</h3>
              
              {/* Displaying of Tasks */}
              {
                tasks.length > 0 ?
                  (<Tasks tasks={tasks} onDelete={deleteTask} onEdit={editTask} />) :
                  ('No Task Found!')
              }
          </div>
        }
    </>
  );
}

export default App;
