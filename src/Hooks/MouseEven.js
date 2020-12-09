import React,{useState,useEffect} from 'react'

export default function MouseEven() {

const [x, setX] = useState(0);
const [y, setY] = useState(0);

const logMousePosition=(e)=>
{
	console.log('Mouse Event');
	setX(e.clientX)
	setY(e.clientY)
}

useEffect(() => {
console.log('useEffect called');
window.addEventListener('mousemove',logMousePosition);
return () =>
{
	console.log('useEffect remove add');
window.removeEventListener('mousemove',logMousePosition);
}
},[])

	return (
		<div>
			
    Mouse X-  {x} Y-{y} 

		</div>
	)
}