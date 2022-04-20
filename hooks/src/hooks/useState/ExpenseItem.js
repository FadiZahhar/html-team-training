import React, {useState} from "react";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
const [newTitle, setNewTitle] = useState(props.title);

const clickHandler=()=>{
         setNewTitle('New Title'); 
      }
  return (
      
    <div className='expense-item'>
    <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{newTitle}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </div>
  );
}

export default ExpenseItem;