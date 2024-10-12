import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chai from './chai'

function App() {
  const [count, setCount] = useState(0)
  const userName = "chai or code "// we can access the variable by {} braces
  // this is called evaluted expression we write finalise js final work 
  return (
    <>
    <Chai/>
    <h1>hello ji {userName} </h1> 
    <p>this is react journey </p>
    </>
  )
}

export default App
 