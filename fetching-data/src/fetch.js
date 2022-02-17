import React, {useState, useEffect} from 'react';
import './fetch.css';

const url = 'https://api.github.com/users';

function Fetch() {
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(false);


const getUsers = async () =>{
    setLoading(true);
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    setLoading(false);
}

useEffect(() =>{
getUsers();
}, [])

// conditional rendering

if(loading){
    return <h3>loading ...</h3>;
    };

  return (
      <>
    <h2>Github users</h2>
    <ul className='user'>

    {users.map((user) =>{
    const {id, login, avatar_url, html_url} = user;
    return (<li key={id}>
<img src={avatar_url} alt={login}/>
<div>
    <h4>{login}</h4>
    <a href={html_url}></a>
    <p>profile</p>
</div>
    </li>)
})}
    </ul>
  
   </>
  )
 
}

export default Fetch;