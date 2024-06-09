import React, { useState } from 'react';

const Showtask = (props) => {
  const [editText, setEditText] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  function delFn(index) {
    props.del(index);
  }

  function clearAll() {
    props.clear();
  }

  function editFn(index, text) {
    setEditIndex(index);
    setEditText(text);
  }

  function handleChange(e) {
    setEditText(e.target.value);
  }

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