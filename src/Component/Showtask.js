import React, { useState } from 'react';

const Showtask = (props) => {
  const [editText, setEditText] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  //When user clicks on "Delete" button, sent the index to parent component(tasks.index);
  function delFn(index) {
    props.del(index);
  }
  //when user clicks on "Clear All" button, all the tasks needs to cleared (code swriiten in parent component and passing here through call back function)
  function clearAll() {
    props.clear();
  }
  //Edit button functionality
  function editFn(index, text) {
    setEditIndex(index);
    setEditText(text);
  }
  //When user clicks on edit, it task changes to the input field and and allow user to type.
  function handleChange(e) {
    setEditText(e.target.value);
  }
  //Functioanlity to update the task by clicking on update button 
  function handleSubmit(index) {
    props.edit(index, editText);
    setEditIndex(null);
    setEditText('');
  }

  return (
    <div className="showTask">
      <div className="head">
        <h4 className="title">Todo</h4>
        <p className="count">{props.show.length}</p>
        <button onClick={clearAll} className="clearAll">
          Clear All
        </button>
      </div>
      <div>
        <ul>
          {props.show.map((task, index) => (
            <li key={index}>
              {editIndex === index ? (
                <form onSubmit={() => handleSubmit(index)}>
                  <input
                    type="text"
                    value={editText}
                    onChange={handleChange}
                  />
                  <button type="submit">Update</button>
                </form>
              ) : (
                <>
                  <p>{task}</p>
                  <i
                    className="bi bi-pencil-square"
                    onClick={() => editFn(index, task)}
                  ></i>
                  <i
                    className="bi bi-trash"
                    onClick={() => delFn(index)}
                  ></i>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Showtask;