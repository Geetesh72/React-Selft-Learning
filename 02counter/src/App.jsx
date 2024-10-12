import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,/*itcanbeanyName*/setCounter]=useState(5) // except fuction we can give anything to this 

  //  counter = 5;
  const addValue = ()=>{
    counter++;
    console.log("Clicked ",counter)
    if(counter<=20){
    setCounter(counter)
    }
    // console.log("clciked by geetesh")


  }
  // let [decrease ,setDecrease]=useState(counter)
  const removeValue= ()=>{
    counter--;
    // console.log("decresed",decrease);
    if(counter>=0){
    setCounter(counter);
  }


  }

  return (
    <>
    <h1>HAPPY DUSHERA</h1>
    <h2>Counter value : {counter}</h2>
      
    <button
    onClick={addValue}>Add value</button>
    <br />
    <button 
    onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
