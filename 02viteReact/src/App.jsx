import React, { useState } from "react";

function App() {
let[count,counter] = useState(15);

 const addValue = () =>{
    counter(count+1);
 }

 const removeValue = () =>{
    if(count>0){
      counter(count-1);
    }  
  
 }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {count}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;