import React, { useState } from 'react'

const Addtask = (props) => {
const [newTask,setNewTask]=useState("")


function handleClick(e){
e.preventDefault();

if(newTask!==""){
{props.add(newTask)}
}
setNewTask("");

}



  return (
    <div className='addTask'>
      <form>
        <input  onChange={(e)=> setNewTask(e.target.value)} type='text' placeholder='Add task' name='add' value={newTask}/>
        <button onClick={handleClick} type='submit'>Add</button>
        </form>
    </div>
  )
}

export default Addtask
