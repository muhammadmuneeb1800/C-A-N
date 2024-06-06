import React,{useState} from "react";
import './index.css';



function App() {
  const [count,updateCount] = useState(0)
  return (
    <div className="Container my-5 text-center">
      <h1>Counter App Create By Muhammad Muneeb</h1>
      <button id="btn"  onClick={() => updateCount(count + 1)}>+</button>
        <span>{count}</span>
        <button id="btn" onClick={() => updateCount(count - 1)}>-</button> <br />
        <button id="btnn" onClick={() => updateCount(0)}>Reset</button>
    </div>
  );
}

export default App;
