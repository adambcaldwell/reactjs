import React from 'react';
import ReactDOM from 'react-dom';

/**
 * @component functional
 * @name Modal
 * @description
 * @param {Object} props - properties
 * @author adam.caldwell
 */
const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
