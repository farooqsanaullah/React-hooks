import React,{useState,useEffect} from 'react'

export default function UseEffectHook() {

	const [count, setCount] = useState(0);
	const [name, setName] = useState('')

useEffect(() => {
	console.log("re-redener")
	document.title = `you click ${count} time`;
},[count])

	return (
		<div>
		<input type="text" onChange={e=>setName(e.target.value)}/>
		<button onClick={()=>setCount(count +1)}>count</button>
		</div>
	)
}