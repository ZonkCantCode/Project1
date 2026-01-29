import Counter from "./components/Counter";
import { useState } from "react";
import Greetings from "./components/Greetings";
import "./App.css";

const Monoapp =()=> {
  const word1 = "Class";
  const [counter, setCounter] = useState(0);


  // const handleClick = ()=>{
  //  setCount(prevCount => prevCount + 1);
  // }

  return (
    <>
      <Counter counter={counter} setCounter={setCounter} />
      <Greetings word1 ={word1} />

      <div>
        <p> hello {word1} </p>
        <p> hello {counter} </p>
      </div>

    </>
  );
}

export default Monoapp;