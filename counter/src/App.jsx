import { useState } from "react";


function App() {

  let  [counter,setCounter]=useState(15);
  const addValue =()=>{
  //  console.log("value added",counter);
  //  counter = counter+1; this will update counter in console but not in UI ,for that u need state hook 
  if(counter<=25){
    setCounter(counter +1);
  }
  }
 const removeValue=()=>{
  if(counter>=0){
    setCounter(counter-1);
  }
  
 }
  return (
 
    <>
     <h1>React Counter</h1>
     <h2>Counter value {counter}</h2>
     <button onClick={addValue}>Add value</button>
     <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
