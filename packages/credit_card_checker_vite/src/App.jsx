import { useState } from 'react'
import {validateCC} from "./utils/validateCC.js";
import {formatter, deformatter} from "./utils/formatter.js";
function App() {
  const [cardNumber, setCardNumber] = useState('')
  const [valid, setValid] = useState(false)

  return (
    <div className={'flex flex-col w-full min-h-screen justify-center items-center'}>
        <div className={'flex-row'}>
          {
            cardNumber.length === 0 ? <div></div> :
                valid ? <h1 className={'text-green-600'}>Valid</h1>
                    : <h1 className={'text-red-600'}>Invalid</h1>
          }
        </div>

      <label className="relative min-w-fit flex flex-col">
        <span className="font-bold mb-3">Card number</span>
        <input className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300" type="text" name="cardNumber" placeholder="0000 0000 0000 0000" onChange={changeHandler} value={cardNumber} />
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      </label>



    </div>
  )

  function changeHandler(e) {
    const cardNumber = e.target.value
    const spacedCardNumber = formatter(cardNumber)
    setCardNumber(spacedCardNumber)
    if (validateCC(deformatter(cardNumber))) {
      setValid(true)
    } else {
      setValid(false)
    }
  }
}



export default App
