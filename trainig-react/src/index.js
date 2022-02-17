import react from 'react'
import ReactDOM from 'react-dom'

//capitalize the names of the function so that react knows it is a component
function Greeting() {
  return <h4> this is my first component</h4>
  //this html is called jsx
}

ReactDOM.render(<Greeting />, document.getElementById('root'))
//self closing tag is a must in react
