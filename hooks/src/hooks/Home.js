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


  // useEffect example

  //   useEffect(() => {
  //   console.log('use effect ran');
  //   console.log(blogs);
  // }, [blogs])


{/* useEffect for fetching data */}
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

{/* useState Example */}
 <span className="example"> useState  Example</span>
        <button onClick={() => setName('luigi')}>change name</button>
       <p>{name}</p>
       <br/>
       <br/>


{/* useEffect for fetching data */}

    { isPending && <div>Loading...</div> }
      <span className="example"> useState + useEffect Example</span>
       <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>


 {/* useRef Example */}
     
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
    {/* useMemo example */}
    <ChangeTheme/>
    <br/>
    <br/>
    {/* useReducer example */}
       <Counter/>
       <br/>
       <br/>
        <div>
    {/* useCustom Hook Exapmple */}
         <span className="example2"> useCustomHook Example:</span>
      <Data/>
      </div>
      <br/>
      {/* useContext Example */}
        <span className="example"> useContext Example:</span>
       <BookContextProvider >
       <Booklist/>
       </BookContextProvider>
    </>
  );
}
 
 
export default Home;