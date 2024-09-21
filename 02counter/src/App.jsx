import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter=5;

  let [counter,setCounter]=useState(10);
  let addValue=()=>{
  //  counter=counter+1;
  //  console.log("clicked",Math.random()," counter ",counter) 
   
   if(counter<20){
     setCounter(counter+1);
   }
   else{
    setCounter(counter);
   }
  }

  let removeValue=()=>{
    // let [counter]=useState(15);
    // counter=counter-1;
    setCounter(counter-1)
    console.log("counter",counter);

    if(counter>0){
      setCounter(counter-1);
    }
    else{
     setCounter(counter);
    }
  }
  
  return (
    <>
  <h1>chai aur react</h1>
  <h2>counter value : {counter}</h2>
  <button onClick={addValue}>Add value {counter}</button>
  <br />
  <p>{counter}</p>

  <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
