import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyinfo'


function App() {
  // const [count, setCount] = useState(0)
  const [amount,setAmount] = useState(0)
  const [from ,setFrom] = useState("usd")
  const [to,setTo] = useState("inr")
  const [convertedAmount,setConvertedAmount] = useState(0)

  const CurrencyInfo = useCurrencyInfo(from)
  
  let options = Object.keys(CurrencyInfo) // list of option 

  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)

  }
   


  const  convert =()=>{ 
    setConvertedAmount(amount*CurrencyInfo[to])
  }










  return (
    <>
      <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url(https://www.pexels.com/photo/vintage-tram-on-a-street-18148937/)`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()

                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOption={options}
                                onCurrencyChange= {(currency)=>
                                  setAmount(amount)}
                                  selectCurrecny={from}
                                  onAmountChange={(amount)=>setAmount(amount)}

                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}

                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="to"
                                amount={convertedAmount}
                                currencyOption={options}
                                onCurrencyChange={(currency)=>
                                   setTo(currency)}
                                  selectCurrecny={from}
                                  amountDisable 

                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert{from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
