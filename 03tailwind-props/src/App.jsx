import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../component/card'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    userName:"hitesh",
    age:58
  }
  let newArray = [4,8,2,5,5]

//someObj={myobj } myarray ={newArray}
  return (
    <>
      <h1 className='bg-orange-700 text.black p-1 
      rounded  '>Tailwind test</h1>
      <Card channel = "chair aur code" /> 
 

    </>
  )
}

export default App
