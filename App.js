//import './App.css';
import './style.css';
import {useState} from 'react';
import Counter from './Counter';

//import Todolist from './Todolist'

function App() {
  const [count,setcount] = useState(0);
  const addcount=()=>{
    setcount(count+1)
    console.log(count)
  }
  const removecount=()=>{
    setcount(count-1)
    console.log(count)
  }
 return(
 <div>
    
    <button type='submit' onClick={addcount}>add</button>
    <button type='submit' onClick={removecount}>delete</button>
   <Counter count={count}/>
  </div>
 
 );
}

export default App;
