import React, {useState, useReducer} from 'react';
import Modal from './Modal';
import './reducer.css';


const reducer = (state, action) => {


if(action.type === 'ADD_ITEM'){
const newPeople = [...state.people, action.name];
return {
    ...state,
    people : newPeople,
    isModalOpen : true,
    modalContent: 'item added',
    
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

  return (
    <>
    <div className='reducer'>
{state.isModalOpen && <Modal modalContent={state.modalContent}/>}
<form onSubmit={handleSubmit}>
  <input type='text' value={name} onChange ={(e) => setName(e.target.value)}/>
    <button type='submit' >Add</button>
</form>
<div>
   
{state.people.map((person) =>{
    return (<div>
    <h4>{person.name}</h4>
    </div>)
})}

</div>
</div>

    </>
  )
}

export default Reducer