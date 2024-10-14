import Button from "../common/button/Button";
import {useState} from "react"
import Container from "../common/container/Container";

function Counter() {
  const[count,setCount] = useState(0);
  const[incButton,setIncButton] = useState({inc:false,desc:true});


  const handleInc= ()=>{
    if(count==9){
      const newButton = {inc:true,desc:false};
      setIncButton(newButton);
    }
    else{
      const newButton = {inc:false,desc:false};
      setIncButton(newButton)
    }
      setCount(count+1);
  }

  const handleDec= ()=>{
    if(count===1){
      const newButton = {inc:false,desc:true};
      setIncButton(newButton);
    }
    else{
      const newButton = {inc:false,desc:false};
      setIncButton(newButton)
    }
    setCount(count-1);
  }

  const handleReset = ()=>{
     setCount(0);
     const newButton = {inc:false,desc:true};
      setIncButton(newButton);
  }
  return (
    <>
    <Container>
      <h1>Count : {count}</h1>
      <div>
        <Button name="INC" onClick={handleInc} disable={incButton.inc}/>
        <Button name="DEC" onClick={handleDec} disable={incButton.desc}/>
        <Button name="RESET" onClick={handleReset} disable={false}/>
      </div>
      </Container>
    </>
  );
}

export default Counter;
