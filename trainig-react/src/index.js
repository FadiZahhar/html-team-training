import react from 'react'
import ReactDOM from 'react-dom'

//JSX Rules
//return single element
//wrap the retun statment with html sementics or a  react.fragment </>
//use camelCase for html attribute
//className instead of class
//close every element

function Greeting() {
  //capitalize the names of the function so that react knows it is a component
  return <h4> this is my first component</h4>
  //this html is called jsx
}

//this is what is happening under the hood but since it is much complicated and messy we use the above format

// const Greeting = () => {
//   return react.createElement('h1', {}, 'hello there')
// }
ReactDOM.render(<Greeting />, document.getElementById('root'))
//self closing tag is a must in react
