import React from 'react'

function Title() {
	return (
		<div>
		<h1>UseCallbackHook</h1>
		{console.log('title component')}	
		</div>
	)
}

export default React.memo(Title)