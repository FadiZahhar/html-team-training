import React from "react"
import Layout from "../components/Layout";

// import * as homeStyles from '../examples/home.module.css'

import { StaticImage } from "gatsby-plugin-image";
// import { Link } from 'gatsby'

import FetchData from '../examples/fetchData'


export default function Home() {
  return (<Layout>

    <main className="page">
      <header className="hero">
        <StaticImage
          src='../assets/images/recipes/recipe-1.jpeg'
          alt='eggs'
          className='hero-img'
          placeholder='blurred'
          layout="fullWidth">

        </StaticImage>
        <div className="hero-container">
          <div className="hero-text">
            <h1>simple recipes</h1>
            <h4>no fluff, just recipes</h4>
          </div>
        </div>
      </header>

      <FetchData />
    </main>
  </Layout>)
}
