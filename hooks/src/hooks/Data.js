import React from 'react'
import useFetch from "./useFetch";
import BlogList from './BlogList';

function Data() {
    const {data, isPending} = useFetch('https://jsonplaceholder.typicode.com/users/')
  return (
     <div className="home">
    { isPending && <div>Loading...</div> }
      <BlogList blogs={data} title="All Blogs"/>
      </div>
  )
}

export default Data