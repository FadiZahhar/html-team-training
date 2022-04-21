import React, {useState, useMemo} from 'react'

function ChangeTheme() {

const [number, setNumber] = useState(0)
const [dark, setDark] = useState(false)
const doubleNumber = useMemo(()=>{
    return slowFunction(number)
},[number])

const themeStyles = {
    backgroundColor : dark ? 'black' : 'white',
    color : dark ? 'white' : 'black'
}

  return (
    <>
     <span className="example"> useMemo Example:</span>
<input type = 'number' value = {number} onChange={e=>setNumber(parseInt(e.target.value))}/>
<div>
<button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
</div>
<div style={themeStyles}>{doubleNumber}</div>
    </>
  )
}

function slowFunction(num) {
    console.log('calling slow function')
    for (let i=0; i <=1000000000; i++){}
    return num * 2
}

export default ChangeTheme