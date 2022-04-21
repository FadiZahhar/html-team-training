import { useState, useEffect, useRef } from "react";
import BlogList from "./BlogList";
import Counter from './Counter'
import ChangeTheme from "./ChangeTheme";
 import Booklist from "./Booklist";
 import BookContextProvider from "../contexts/BookContext";
 import Data from "./Data";


const Home = () => {

 
  const [number, setNumber]= useState('');
  
  const nameInputRef = useRef();
  
  const [blogs, setBlogs] = useState([])
  const [isPending, setIsPending]= useState(true);
 

  // const [blogs, setBlogs] = useState([ 
  //    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
  //   { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
  //   { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  // ])

  const [name, setName] = useState('mario');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog=> blog.id !== id);
    setBlogs(newBlogs)
  }

  //   useEffect(() => {
  //   console.log('use effect ran');
  //   console.log(blogs);
  // }, [blogs])


  useEffect(() => {
    setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(res =>{
      return res.json();
    })
    .then(data => {
     setIsPending(false);
      setBlogs(data)
    })
     }, 1000);
  },[])


const changeHandler =()=> {
setNumber(nameInputRef.current.value)
  }

  return (
    <>
    
    <div className="home">
    { isPending && <div>Loading...</div> }
      <span className="example"> useState Example</span>
      {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>}
       <button onClick={() => setName('luigi')}>change name</button>
       <p>{name}</p>
       <br/>
       <div className="input-style">
           <span className="example"> useRef Example:</span>
        <label 
        htmlFor="Number">
        <p className="label"> ENTER YOUR NUMBER</p>
       </label>
        <input 
        type='text' 
        id='Number' 
        ref={nameInputRef}
        />
        
        <div>
          <br/>

        <button type="submit" onClick={()=>{changeHandler()}}> ADD NUMBER</button>
        </div>

        <div>{number}</div>
    </div>
    </div>
    <br/>
    <br/>
    <br/>
    <ChangeTheme/>
    <br/>
    <br/>
       <Counter/>
       <br/>
       <br/>
        <div>
         <span className="example2"> useCustomHook Example:</span>
      <Data/>
      </div>
      <br/>
        <span className="example"> useContext Example:</span>
       <BookContextProvider >
       <Booklist/>
       </BookContextProvider>
    </>
  );
}
 
 
export default Home;