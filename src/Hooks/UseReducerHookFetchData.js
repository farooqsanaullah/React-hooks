import React,{useReducer,useEffect} from 'react'
import axios from "axios";
function UseReducerHookFetchData() {



const initialState =
{
	loading:true,
	post:{},
	error:''
}


const reducer = (state,action)=>
{

	switch (action.type) {
		case 'FETCHDATA':
			return {
				loading:false,
				post:action.payload,
				error:''
			}
		case 'ERROR':
			return {
				loading:false,
				post:'',
				error:"Something error"
			}
				
		default:
		return state
	}


}


const [state, dispatch] = useReducer(reducer, initialState)


useEffect(() => {

	axios.get('http://jsonplaceholder.typicode.com/posts/1')
	.then(res=>
	{
		dispatch({type:'FETCHDATA',payload:res.data})
	}).catch(err=>
	{
		dispatch({type:'ERROR'})
	})

}, [])


	return (
		<div>
			{state.loading?'loading...':state.post.title}
			
			{state.error?state.error:null}

		</div>
	)
}

export default UseReducerHookFetchData