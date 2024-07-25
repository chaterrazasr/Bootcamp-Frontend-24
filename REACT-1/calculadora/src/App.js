import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const [result ,setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
  	// Add the code for the minus function
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value)); 
  };
 
  function times(e) { 
    // Add the code for the multiply function
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value)); 
  }; 
 
  function divide(e) { 
    // Add the code for the divide function 
    e.preventDefault(); 
    setResult((result) => {
      if(result === 0 || inputRef.current.value == null){
        return Number(inputRef.current.value);
      }
      return result / Number(inputRef.current.value)}); 
  };
 
  function resetInput(e) { 
    // Add the code for the resetInput function 
    e.preventDefault();
    inputRef.current.value = null; 
    
  }; 
 
  function resetResult(e) { 
  	// Add the code for the resetResult function 
    e.preventDefault();
    setResult(0);
  };
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Calculadora</h1> 
      </div> 
      <div>{result}</div>
      <form> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button>
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>resetInput</button>
        <button onClick={resetResult}>resetResult</button> 
      </form> 
    </div> 
  ); 
} 
export default App; 