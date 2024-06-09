
import { useEffect, useState } from 'react';
import './App.css';
import Addtask from './Component/Addtask.';
import Header from"./Component/Header";
import Showtask from './Component/Showtask';

function App() {

  const[tasks, setTasks]= useState(JSON.parse(localStorage.getItem("tasks"))||[]);

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
  }, [tasks])

function addFn(task){
  setTasks((preTasks)=>{
    return [...preTasks,task]
  })
 
}

function delFunction(id){
 
setTasks((preTasks)=>{
  return preTasks.filter((tasks,index)=>{
    return id!==index
  })
})
}

function clear(){
  setTasks([]);
}
function editTask(index, newText) {
  const updatedTasks = [...tasks];
  updatedTasks[index] = newText;
  setTasks(updatedTasks);
}

  return (
    <div className="App">
      <Header />
      <Addtask add={addFn}/>
      <Showtask  show={tasks} del={delFunction} clear={clear} edit={editTask}/>
    </div>
  );
}

export default App;
