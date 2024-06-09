import React, { useState } from 'react'

const Addtask = (props) => {
  const [newTask, setNewTask] = useState("")

  //functioanlity to add the task 
  function handleClick(e) {
    e.preventDefault();
    //when user clicks on "Add"- the new task should be sent to parent(using callback function)
    if (newTask !== "") {
      { props.add(newTask) }
    }
    setNewTask("");

  }



  return (
    <div className='addTask'>
      <form>
        <input onChange={(e) => setNewTask(e.target.value)} type='text' placeholder='Add task' name='add' value={newTask} />
        <button onClick={handleClick} type='submit'>Add</button>
      </form>
    </div>
  )
}

export default Addtask
