import { useRef,useState } from "react";

export default function Timer(){
    const [time,setTime] = useState(0);
    const id = useRef(null);
    const resetTimer = ()=>{
        stopTimer();
        setTime(0);
        startTimer();
    }
    const stopTimer = ()=>{
        clearInterval(id.current);
    }
    const startTimer = ()=>{
        id.current = setInterval(()=>{
           setTime(time=>time+1);
        },1000)
        console.log(id);
    }

 
    return (
        <div>
            <h1 style={
                {
                    textAlign:"center"
                }
            }>Timer</h1>
            <h2>{time}</h2>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    )
}