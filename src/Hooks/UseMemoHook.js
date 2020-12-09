import React,{useState,useMemo} from 'react'

function UseMemoHook() {

	const [counterOne, setCounterOne] = useState(0)
	const [counterSecond, setCounterSecond] = useState(0)

	const counterIncrementOne = ()=>
	{
		setCounterOne(counterOne+1)
	}


	const isEven = useMemo(() => {let i=0;
		while(i<200000) i++;
		return counterOne%2==0}, counterOne)


	const counterIncrementSecond = ()=>
	{
		setCounterSecond(counterSecond+1)
	}
	return (
		<>
		<div>
		<button onClick={counterIncrementOne}>Count One -{counterOne}</button>	
		<span>{isEven?'even':'odd'} </span>
		</div>

		<div>
		<button onClick={counterIncrementSecond}>Count Second -{counterSecond}</button>	
		</div>
		</>
	)
}

export default UseMemoHook