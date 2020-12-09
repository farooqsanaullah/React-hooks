import React,{useEffect,useRef,useState} from 'react'

function UseRefHook() {

const intervalTimer = useRef(0)

const [timer,setTimer] = useState(0)

useEffect(() => {

intervalTimer.current = setInterval(()=>
{
     setTimer(timer=>timer+1);
},1000)
return () =>
{
	clearInterval(intervalTimer.current);
}
},[])




	return (
		<div>
         {timer}
         <button onClick={()=>{clearInterval(intervalTimer.current)}}>ClearInterval</button>
		</div>
	)
}

export default UseRefHook