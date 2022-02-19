import React, {useState, useReducer} from 'react';
import Modal from './Modal';
import './reducer.css';

// reducer function
const reducer = (state, action) => {

if(action.type === 'ADD_ITEM'){
const newPeople = [...state.people, action.payload];
return {
    ...state,
    people : newPeople,
    isModalOpen : true,
    modalContent: 'item added',
    
}
    };

if(action.type === 'NO_VALUE'){
return {
    ...state,
   
    isModalOpen : true,
    modalContent: 'Enter a value',
}
    };

    if(action.type === 'CLOSE_MODAL'){
    return {
    ...state,
    isModalOpen : false,
}
    };
};


const defaultState = {
    people : [],
    isModalOpen: false,
    modalContent: '',
    
   
};

function Reducer() {
    const [name, setName] = useState('');
    const [state, dispatch] = useReducer(reducer, defaultState);

const handleSubmit = (e) => {
    e.preventDefault();
    if(name){
        dispatch({type:'ADD_ITEM', name});
        setName('');
    }
    else{
        dispatch({type: 'NO_VALUE'});
    }
};
const closeModal =() =>{
    dispatch({type: 'CLOSE_MODAL'})
}
  return (
    <>
    <div className='reducer'>
{state.isModalOpen && <Modal modalContent={state.modalContent} closeModal={closeModal}/>}
<form onSubmit={handleSubmit}>
  <input type='text' value={name} onChange ={(e) => setName(e.target.value)}/>
    <button type='submit' >Add</button>
</form>
<div>
   
{state.people.map((person) =>{
    return (
    <div>
    <h4>{person.name}</h4>
    </div>)
})}

</div>
</div>

    </>
  )
}

export default Reducer