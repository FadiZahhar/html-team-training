import React from "react";
import styled from 'styled-components';
import big from '../assets/images/big.jpg'
import { StaticImage } from "gatsby-plugin-image";

const Images =()=>{
    return (
        <Wrapper>
            <StaticImage src="../assets/images/recipe-1.jpeg" alt="food" placeholder="tracedSVG" layout="constrained" className="example-img"
            as='section'/>
            <h2>gatsby image</h2>
        </Wrapper>
    )
}

const Wrapper = styled.section`
width: 70vw;
margin: 0auto;
display: grid;
text-align: center;
gap: 2rem;
article{
    border: 2px solid red;
}
.example-img{
    border-radius: 1rem;
}
@media (min-width: 992px){
  grid-template-columns: 1fr 1fr 1fr;  
}
`
export default Images;