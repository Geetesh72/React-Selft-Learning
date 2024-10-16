import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // THIS IS WE create application use create react app 
  //  / console.log(process.env.REACT_APP_APPWRITE_URL);
  // this when we create application by vite?
  console.log(import.meta.env.VITE_APPWRITE_URL)


  return (
    <>
      <h1>This is our mega project </h1>
    </>
  )
}

export default App
