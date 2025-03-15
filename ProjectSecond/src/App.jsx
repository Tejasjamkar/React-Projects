import { useState } from 'react';
import './App.css';
import Card from "./Components/Card"

function App() {
  return (
    <>

    <h1 className='bg-green-400 text-black'>Tailwind Test</h1>
    <h3>In this website I used Tailwind and Showing how can we used Dynamically Card</h3>
    < Card Name="tejas" Price="23"/>  
   < Card Name={"hello"} Price={"24"}/>

    </>
  );
}

export default App;

