import { useState } from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
  // first value is the initial value, second is a function which allows us to change the value
  const [ modalIsOpen, setModalIsOpen ] = useState(false);

	function deleteHandler() {
		setModalIsOpen(true);
	}

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{ props.text }</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      { modalIsOpen && <Modal /> }
      { modalIsOpen && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
}

export default Todo;
