import Header from './Components/Header'
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask';
import React, { useState, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid'
import Swal from 'sweetalert2'

function App() {
  const [tasks, setTasks] = useState([])
  const [showAddTask, setShowAddTask] = useState(false)

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
