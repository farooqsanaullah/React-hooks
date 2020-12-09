import logo from './logo.svg';
import './App.css';
import React ,{useState,useEffect} from 'react';
import UseStateHook from './Hooks/UseStateHook'
import UseEffectHook from './Hooks/UseEffectHook'
import MouseEven from './Hooks/MouseEven'
import FetchData from './Hooks/FetchData'
import UseContext from './Hooks/UseContext'
import UseReducerHook from './Hooks/UseReducerHook'
import UseReducerHookMultiple from './Hooks/UseReducerHookMultiple'
import UseReducerWithUseContext from './Hooks/UseReducerWithUseContext/UseReducerWithUseContext'
import UseReducerHookFetchData from './Hooks/UseReducerHookFetchData'
import UseCallbackHook from './Hooks/UseCallbackHook/UseCallbackHook'
import UseMemoHook from './Hooks/UseMemoHook'
import UseRefHook from './Hooks/UseRefHook'
import useDocumentTitle from './Hooks/CustomHook/useDocumentTitle'
export const UserContext = React.createContext();



function App() {

const [display, setDisplay] = useState(true);

const [count, setCount] = useState(0);


useDocumentTitle(count)


  return (
    <div className="App">
		{/*button onClick={()=>setDisplay(!display)}>Toggle</button>
		 {display?<MouseEven/>:null}
		<FetchData/>

  <UserContext.Provider value={'farooq'}>
  <UseContext/>

  </UserContext.Provider>


<UseReducerHookWithComplex/>
<UseReducerHook/>

<UseReducerHookMultiple/>

<UseReducerWithUseContext/>

<UseReducerHookFetchData/>

<UseCallbackHook/>

<UseMemoHook/>
<UseRefHook/>
*/}

<button onClick={()=> setCount(count=>count+1)}>Count- {count}</button>
	</div>
  );
}

export default App;
