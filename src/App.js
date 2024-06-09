
import { useEffect, useState } from 'react';
import './App.css';
import Addtask from './Component/Addtask.';
import Header from "./Component/Header";
import Showtask from './Component/Showtask';

function App() {
  //Used Callback function to get the variable from chils to parent component

  //Functioanlity to store the task locally 
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])
  //Functioanlity to add task 
  function addFn(task) {
    setTasks((preTasks) => {
      return [...preTasks, task]
    })

  }
  //Functioanlity to delete task
  function delFunction(id) {

    setTasks((preTasks) => {
      return preTasks.filter((tasks, index) => {
        return id !== index
      })
    })
  }

  //functioanlity to clear all tasks
  function clear() {
    setTasks([]);
  }

  //functioanlity to edit the task
  function editTask(index, newText) {
    const updatedTasks = [...tasks];
    updatedTasks[index] = newText;
    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <Header />
      <Addtask add={addFn} />
      <Showtask show={tasks} del={delFunction} clear={clear} edit={editTask} />
    </div>
  );
}

export default App;
