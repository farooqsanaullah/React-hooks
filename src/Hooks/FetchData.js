import React,{useState,useEffect} from 'react'
import axios from 'axios';
function FetchData() {

	const [post,setPost]=useState({});

	const [id, setId] = useState(1);

	const [getIdByClick, setIdByClick] = useState(1);


const handleClick = ()=>
{
	setIdByClick(id);
}

	useEffect(() => {
	
    axios.get(`http://jsonplaceholder.typicode.com/posts/${getIdByClick}`).
    then(res=>{

    	console.log(res);
    	setPost(res.data);
    }).catch(error=>
    {
    	console.log(error);
    })
	}, [getIdByClick])

	return (
		<div>

    <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
    <button onClick={handleClick}>Fetch Post</button>
    <div>{post.title}</div>

{/*	     <ul>
	     {posts.map((post)=>(

	     <li key={post.id} > {post.title}</li>	

	     	))}
	     </ul>
	     */}


		</div>
	)
}

export default FetchData