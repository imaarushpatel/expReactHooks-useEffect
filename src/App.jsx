import { useEffect, useState } from 'react'
import './App.css'

function Counter (){
  const [count, setCount] = useState(0);
  const [data , setData] = useState("Ram");

 useEffect (()=> {
  console.log("Component Mounted")
 } , [data])




  return (
    <div> 
      <h1>You Clicked {count} Times </h1>
      <button onClick={()=> setCount (count +1)} >Increase Me! </button> 
      
      <hr/>
      
      <button onClick={()=> setCount (count -1)} >Decrease Me! </button>
      <hr/>

      <button onClick={() => setData ("Rajan")} > Update Data </button>
    </div>

  );
}

export default Counter