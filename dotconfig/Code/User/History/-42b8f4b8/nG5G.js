import { useState } from 'react';

function Todo(props) {
  // first value is the initial value, second is a function which allows us to change the value
  const [ modalIsOpen, setModalIsOpen ] = useState(false);

	function deleteHandler() {
		
	}

  return (
    <div className="card">
      <h2>{ props.text }</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;
