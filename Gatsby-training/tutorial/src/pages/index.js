import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return <div>Hello world!
<br></br>
    <Link to="/testing">
      testing
    </Link>
    <br></br>
    <Link to="/company/home">
      comapny
    </Link>
    <div>
    <a href="/testing">testing</a>
    </div>
  </div>
}
