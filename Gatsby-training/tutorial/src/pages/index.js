import React from "react";
import { Link } from "gatsby";
import Navbar from "../components/Navbar";
import Layout from "../components/layout";
import {page,text} from "../exemples/home.module.css";
import { ExampleButton} from "../exemples/button";
export default function Home() {
  return<Layout>
    <div className={page}>
    Hello world!
    <ExampleButton>click me</ExampleButton>
   <br></br>
    <Link to="/testing">
      about
    </Link>
    <br></br>
    <Link to="/company/home">
      comapny
    </Link>
    <div>
    <a href="/testing">regular link about</a>
    <p className={text}>HI </p>
    </div>
    </div>
  </Layout>
}
