import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0); 
const[error,suberror]=useState('');
  const Increase = () => {
  
    setCount(count + 1);
    suberror('');
  };
  const Decrease = () => {
    if(count<0){
    suberror("it can't go below 0");
    }
    else{
      setCount(count-1);
      suberror('');

    }
  };

  return (
    <>
    <h1>hello ji i am tejas</h1>
    <h3>For Increase or Decrease the amount press button</h3>
    <br/>
    <h2 id='Show'>{count}</h2>
<br/>
<button  onClick={Increase}>Increase</button>
<br />
<button onClick={Decrease}>Decrease</button>
{error && <p style={{color:"red"}}>{error}</p>}

    </>
  )
}

export default App
