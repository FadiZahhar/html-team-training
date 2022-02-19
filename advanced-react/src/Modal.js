import React,{useEffect} from 'react';

function Modal(props) {
  useEffect(()=>{
  setTimeout(()=>{
    {props.closeModal()}
  },3000);
  });
  return (
    <div>{props.modalContent}</div>
  )
}

export default Modal