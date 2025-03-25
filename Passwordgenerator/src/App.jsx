import { useCallback, useState, useEffect, useRef } from 'react';
import './App.css';


function App() {
  const [length, setlength] = useState(8);
  const [numberallowed, setnumberallowed] = useState(false);
  const [characterallowed, setcharacterallowed] = useState(false);
  const [Password, setpassword] = useState("")
  const passwordcopy=useRef(null);
  const passwordgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberallowed) str += "0123456789"
    if (characterallowed) str += "!@#$%^&*-_+=[]{}~`"
    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass)
  }, [length, numberallowed, characterallowed, setpassword]);

  const copytoclipboard = useCallback(() => {
    passwordcopy.current?.select();
    passwordcopy.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(Password)
  }, [Password])

  useEffect(() => { passwordgenerator() }, [length, numberallowed, characterallowed, passwordgenerator])
  return (


    <div className='w-full max-w-md mx-auto shadow-md rounded-lg py-3 px-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          type='text'
          value={Password}
          className='outline-none w-full py-1 px-3 bg-white'
          placeholder='Password'
          readOnly
          ref={passwordcopy}
        ></input>
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0  hover:bg-amber-400 duration-300' onClick={copytoclipboard}>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setlength(e.target.value) }}
          />
          <label>Length:{length}</label>
        </div>
        <div className='flex item-center gap-x-1'>
          <input type="checkbox"
            defaultChecked={numberallowed}
            id="numberInput"
            onChange={() => {
              setnumberallowed((prev) => !prev);
            }} />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex item-center gap-x-1'>
          <input type="checkbox"
            defaultChecked={characterallowed}
            id="characterInput"
            onChange={() => {
              setcharacterallowed((prev) => !prev);
            }} />
          <label htmlFor='characterInput'>Characters</label>
        </div>
      </div>
    </div>


  )
}

export default App;

