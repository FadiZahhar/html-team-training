import { useState, useEffect, useRef } from "react";
import BlogList from "./BlogList";

const Home = () => {

  const [name2, setName2]= useState('');

  const nameInputRef = useRef();
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

  const [name, setName] = useState('mario');

  const handleDelete =(id) => {
    const newBlogs = blogs.filter(blog=> blog.id !== id);
    setBlogs(newBlogs)
  }

  useEffect(() => {
    console.log('useEffect run');
  },)

const changeHandler =()=> {
setName2(nameInputRef.current.value)
  }

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>}
       <button onClick={() => setName('luigi')}>change name</button>
       <p>{name}</p>
       <br/>
       <div className="input-style">
        <label 
        htmlFor="Name" 
        className="label" 
      >
        ENTER YOUR NAME</label>
        <input type='text' id='Name' ref={nameInputRef}
        />
        
        <div>
          <br/>
        <button type="submit" onClick={()=>{changeHandler()}}> ADD NAME</button>
        </div>

        <div>{name2}</div>
    </div>
    </div>
  );
}
 
 
export default Home;