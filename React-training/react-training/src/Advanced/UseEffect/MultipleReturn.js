import React, { useState, useEffect } from 'react';
 

export const MultipleReturn = () => {
 const [loading,setLoading]=useState(true);
 const[user,setUser]=useState('default user')
 const [isEroor,setIsError]=useState(false)
const url='https://api.github.com/users/QuincyLarsons';

 useEffect(() => {
  fetch(url)
  .then((resp)=>resp.json())
  .then((user)=>{
   console.log(user)
const {login}=user;
setUser(login);
setLoading(false);

  })
  .catch((error)=>console.log('error'))
  
}, []);

 if(loading){
return <h2>Loading ....</h2>
 }
 if(isEroor){
  return <h2>Error ....</h2>

 }
  return (
    <div>MultipleReturn</div>
  )
}
