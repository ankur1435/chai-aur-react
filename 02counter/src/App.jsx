import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)

  // let counter=5;

  const addValue = () => {
    console.log('clicked',counter);
    if (counter>=20) {
      console.log('counter can not be greater than 20')
    }
    else{
    setCounter(counter+1)
    }
  }

  const removeValue = () => {
    if (counter<=0) {
      console.log("counter can not be less than 0");
    }
    else{
     setCounter(counter-1);
    }  
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br></br>
      <button
      onClick={removeValue}
      >Remove value {counter}</button> 
      <p>footer: {counter}</p> 
    </>
  )
}

export default App
