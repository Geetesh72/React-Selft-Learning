import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import './index.css'



// HOW react expect from up to wirte the code 
const reactElement = React.createElement(
  'a', // 1st parameter expect is tag anyon e
  {   // 2nd paremeter is expected is object
    href :"https://google/com",formTarget:'black',
  },
  'click me to visit google' // 3rd is expected is dierect text 
    // anotherElement  this is evaluted expression 
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
