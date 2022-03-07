import React from 'react'
import Layout from '../components/Layout'
// import { page, text } from '../../examples/about.module.css'
// import styled from 'styled-components'

// export default function about() {
//   return (
//     <Layout >
//       <Wrapper>
//         <div >
//           <h1>about page</h1>
//           <h2>Hello</h2>
//           <p className='text' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae soluta obcaecati impedit architecto, aliquam eos laborum iste magnam asperiores! Minus voluptatibus error, at laboriosam voluptatum laborum illum expedita ipsam cumque.</p>
//         </div>

//       </Wrapper>
//     </Layout>
//   )
// }

import { StaticImage } from "gatsby-plugin-image";
import {Link} from 'gatsby'
export default function About() {
  return (
    <Layout >
        <main className="page">
          <section className="about-page">
            <article>
            <h2>I'm baby coloring book poke taxidermy</h2>
            <p>
              Taxidermy forage glossier letterpress heirloom before they sold
              out you probably haven't heard of them banh mi biodiesel chia.
            </p>
            <p>
              Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia
              retro.
            </p>
              <Link to='/contact' className='btn'>
              Contact
              </Link>
            </article>
            <StaticImage 
            src='../assets/images/about.jpeg' 
            alt='Person Pouring Salt In Bowl'
            className='about-img'
            placeholder='blurred'
    
            />
          </section>
        </main>

    </Layout>
  )
}
// const Wrapper = styled.section`
 
//   background-color: rgb(38, 170, 21);

//  h1 {
//   color: darkred;
// }
// .text {
//   text-transform: uppercase;
//   font-weight: bold;
//   font-family: 'Courier New', Courier, monospace;
//   font-size: 2rem;
// }

// `
