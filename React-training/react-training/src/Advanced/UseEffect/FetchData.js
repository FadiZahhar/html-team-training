import React, { useState, useEffect } from 'react';

// second argument


const url = 'https://api.github.com/users';

const FetchData = () => {
  const [user, setUsers] = useState([]);


const getUsers = async () => {

  const response = await fetch(url);
  const users = await response.json();
    setUsers(users);
  };

useEffect(() => {
  getUsers();
  
}, []);

  return (

<>
<h3>github users</h3>
 <ul   style={{backgroundColor:"#eaeaea"}}>
{  user.map((user) => {
  // const { id, login, avatar_url, html_url } = user;
      return (
  <li key={user.id}  >
    <img src={user.avatar_url} style={{width:"20%"}} />
      <div  >
         <h4>{user.login}</h4>
             <a href={user.html_url}>profile</a>
      </div>
  </li>
          );
        })}
</ul>
 </>
  );
};

export default FetchData;