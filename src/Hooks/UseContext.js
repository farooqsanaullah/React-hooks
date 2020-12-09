import React,{useContext} from 'react'

import {UserContext} from '../App';

function UseContext() {

	const user = useContext(UserContext)
	return (
		<div>
			{user}
		</div>
	)
}

export default UseContext