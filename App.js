import "./styles.css";
import ChessBox from "./ChessBox"
import React from "react";


export default function App() {
 const [element,setelement] = React.useState()
  function display(e){
    setelement(element=><ChessBox/>)

  }

  return (
    <div className="App">
     <input type="number" onChange={display} name="size"/>
     {element}
     
    </div>
  );
}
