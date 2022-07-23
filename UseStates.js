import React, { useState } from 'react';

const UseStates = () => {
    const [name,setName]=useState("Yuvraj");
    let UpdateName =()=>
    {
        setName("Thakur");
    }
    
    return (
        <div>
            <h1>Use of useState</h1>
            <h2>{name}</h2>
            <button onClick={UpdateName}>Update Name</button>
        </div>
    );
};

//  Another example of UseState Hook
/* function UseStates() {  
    // Declare a new state variable, which we'll call "count"  
    const [count, setCount] = useState(0);  
    
    return (  
      <div>  
        <p>You clicked {count} times</p>  
        <button onClick={() => setCount(count + 1)}>  
          Click me  
        </button>  
      </div>  
    );  
  }  */ 
  

export default UseStates;