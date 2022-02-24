import React from 'react'
import { Link } from "gatsby"
import * as gatsbystyle from"../exemples/home.module.css";
import styled from 'styled-components';
export default ()  => {
  return (
    <>
    <div className={gatsbystyle.page}>
      about
      <br/>
       <Link to='/'>Home</Link>
       </div>
       {/*styled-component  */}
       <Wrapper>
          <h1>styled-component</h1>
         <p>
          Hello my name is John
          </p>

       </Wrapper>
       </>
  )
}
//styled-component
const Wrapper=styled.section`

color:red;
h1{
  color:yellow;
}
`