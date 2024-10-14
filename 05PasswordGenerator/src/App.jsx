import { useState } from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'



function App() {
  const [length,setLength]=useState(8);
  const [numAllowed ,setnumAllowed] =useState(false);
  const [charAllowed,setCharAllowed]=useState(false);

  const [Password,setPassword]=useState("")

  const passwordGenerator =useCallback(()=>{
    let pass ="";
    let str = "ABCDEFGHIJKLMNOPQRSTUVwXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllowed){
      str+="0123456789";

    }
    if(charAllowed){
      str+="!@#$%^&*()_=+-}{][`~"
    }

    for(let i = 1;i<=length;i++){
      let genPass  = Math.floor(Math.random()*str.length+1);
      pass += str.charAt(genPass)

    }
    setPassword(pass);


  },[length,numAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    PasswordRef.current?.select();
    PasswordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [Password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])

  


  return (
    <>
    <h1>This is geetesh</h1>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
    <h1 className='text-white text-center my-3'>Password generator</h1>
  <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input
          type="text"
          value={Password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={PasswordRef}
      />
      <button
      onClick={copyPasswordToClipboard}
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
      >copy</button>
      
  </div>
  <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input 
      type="range"
      min={6}
      max={100}
      value={length}
       className='cursor-pointer'
       onChange={(e) => {setLength(e.target.value)}}
        />
        <label>Length: {length}</label>
    </div>
    <div className="flex items-center gap-x-1">
    <input
        type="checkbox"
        defaultChecked={numberAllowed}
        id="numberInput"
        onChange={() => {
            setNumberAllowed((prev) => !prev);
        }}
    />
    <label htmlFor="numberInput">Numbers</label>
    </div>
    <div className="flex items-center gap-x-1">
        <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
                setCharAllowed((prev) => !prev )
            }}
        />
        <label htmlFor="characterInput">Characters</label>
    </div>
  </div>
</div>
</>
  )
}

export default App
