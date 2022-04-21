import React, {useReducer} from "react";

function reducer(counter, action) {
switch(action.type){
case 'increment':
     return (counter + 1)
case 'decrement':
     return (counter - 1)

default:
         return counter
}
}

export default function Counter() {
 const [counter, dispatch] = useReducer(reducer, 0);


function increment () {
      dispatch({type:'increment'})
}
     
function decrement () {
     dispatch({type:'decrement'})
}
     
     
  return (
      <>
    <div className="counter">
        <span className="example"> useReducer Example:</span>
        <div className="counter-text">Counter</div>
    <br/>
    <div>{counter}</div>
    <button className="counter-btn" onClick={increment}>Increase</button>
     <button className="counter-btn" onClick={decrement}>Decrease</button>
     </div>
    </>
  )
}