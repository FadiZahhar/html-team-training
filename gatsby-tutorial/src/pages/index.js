import React from "react"
import Layout from "../components/Layout";
import * as name from '../styling/index.module.css';
import {ExampleButton} from './button';
import styled from "styled-components";

export default function Home() {
  return(

  <Layout>
  <Wrapper>

  <ExampleButton>click me</ExampleButton>
  <h1 className={name.text}>Hello world</h1>
  <p>My name is Nour</p>

  </Wrapper>
  </Layout>
  )
}

const Wrapper = styled.section`
color: blue;
h1{
  color:yellowgreen ;

}
.text{
  text-decoration: overline;
}
`
