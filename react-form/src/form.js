import React, {useState} from 'react'
import './form.css';


// controlled inputs
function Form() {

    const [name , setName]= useState('');
    const [email , setEmail]= useState('');
    const [people , setPeople]= useState([]);
  
const submitHandler = (e) => {
  e.preventDefault();
  if(name && email){
 const person = {name: name , email : email};
  setPeople((people)=>
     {return [...people, person]});

}
setName('');
setEmail('');
}

    return (
    <article>
<form className='form' onSubmit={submitHandler}>

<div className='user'>
     <label htmlFor='firstName'>Name:  </label>
     <input 
     type='text' 
     id='fisrtName' 
     name='fisrtName' 
     value={name} 
     onChange = {
         (e)=>{setName(e.target.value)}
        }
      
     >
    
     </input>
</div>

<div className='user'>
     <label htmlFor='email'>Email:  </label>
     <input 
     type='text' 
     id='email' 
     name ='email' 
     value={email} 
     onChange={(e)=>{setEmail(e.target.value)}}>
     
     </input>
</div>
<button type='submit' className='btn'>Add person</button>
</form>


<section className='people'>
    {
        people.map((person)=>{
            const {id, name, email}= person;
            return (
            <div className='user'>
                <h4>{name}</h4>
                <p>{email}</p>
            </div>
            )
        })
    }
</section>

    </article>
  )
}

export default Form