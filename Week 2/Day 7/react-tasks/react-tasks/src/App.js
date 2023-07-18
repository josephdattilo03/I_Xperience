
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import TaskForm from './components/taskForm/taskForm';
import TaskTable from './components/taskTable/taskTable';
import { useEffect, useState } from 'react';
import { Task } from './models/task/task';

function App() {

  const [tasks, setTasks] = useState([])
  const [editTask, setEditTask] = useState(null)

  useEffect(() => {getTasksFromLocal()},[])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    saveTasksToLocal()}, [tasks])

  function onTaskCreated(task) {
    setTasks([...tasks, task])
    for(let i = 0; i < tasks.length; i ++) {
      tasks[i].id = i
    }
  }

  function onTaskEdit(task) {
    setEditTask(task)
    setTasks(tasks.filter((x) => {
      return x.id !== task.id
    }))
  }

  function saveTasksToLocal() {
    const json = JSON.stringify(tasks)
    localStorage.setItem("tasks",json)
  }

  function onDeleteTask(task) {
    setTasks(tasks.filter((x) => {
      return x.id !== task.id
    }))
  }

  function getTasksFromLocal() {
    const json = localStorage.getItem("tasks")
    if(json) {
      let taskArr = JSON.parse(json)
      if (taskArr.length) {
        setTasks(taskArr.map((task) => (Task.fromJSON(task))))
      }
    }
  }

  return (
    <div className="App">
      <h1 className="text-center mt-5 h1" id="title">Task<br/> Manager</h1>
      <TaskForm onTaskCreated={onTaskCreated} taskToEdit={editTask}/>
      <TaskTable tasks={tasks} onDeleteTask={onDeleteTask} onTaskEdit={onTaskEdit}/>
    </div>
  );
}

export default App;
