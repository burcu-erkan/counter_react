import "./App.css";

import React, { useState } from "react";
 import Decrease from "./components/Decrease"
 import Increase from "./components/Increase"
 import Reset from "./components/Reset"



const App = () => {
const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Counter</h1>
      <h1 className={(count<0) ?"negative" :(count>0)?"positive" : null}>{count}</h1>
      <Decrease decrease={()=>setCount(count-1)}/>
      <Reset reset={()=>setCount(0)}/>
      <Increase increase={()=>setCount(count+1)}/>
    </div>
  );
}
export default App