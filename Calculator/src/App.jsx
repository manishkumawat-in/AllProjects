import Display from "./Display";
import Buttons from "./Buttons";
import './App.css'
import { useState } from "react";


function App() {

  const btnValues = ["C","AC","0","1","2","3","4","5","6","7","8","9","+","-","/","*","=","."];

  const [btnText, setBtnText] = useState("")
  const btnClick = (btnValue)=> {
    
    if (btnValue == "=") {
      const result = eval(btnText);
      setBtnText(result);
    } 
    else if (btnValue == "C") {
      setBtnText(btnText.slice(0, -1))
    }
    else if(btnValue == "AC"){
      setBtnText("")
    } 
    else {
      const newDisplayValue = btnText + btnValue;
      setBtnText(newDisplayValue);
    }
    
  }

  return (
    <div className="container">
      <Display displayValue={btnText}/>
      <Buttons btnValues={btnValues} btnClick={btnClick}/>
    </div>
  )
}

export default App
