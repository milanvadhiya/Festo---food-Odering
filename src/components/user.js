import {useState} from 'react';


const user=({name})=>{
 
  const[count,setCount]= useState(0);
   const[count2,setCount2]= useState(1);
 
    return(
        <div className="user-card">

 
            <h1>Count={count}</h1>
             <h1>Count={count2}</h1>
            <h1>User Component</h1>
            <h2>Name:{name}</h2>
            <h2>location:Junagadh</h2>
            <h2>Contact:+919313273221</h2>

        </div>
    );
};

export default user;