import React from 'react';

// function Greet()
// {
//     return <h1>Hello shailesh</h1>
// }
const Greet =props=>{
    return (
         <div>
        <h1> Hello {props.name}  your age is  {props.age} </h1>
        <h1>{props.children}</h1>
        </div>
    );
   
}


export default Greet;
