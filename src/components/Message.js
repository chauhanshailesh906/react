import React from 'react';

class Message  extends React.Component
{

     state={
         message:"Welcome Visitors",
     };

    changeMessage=  ()=>
    {
        this.setState({message:"Thnx for subscribe"})
    }
    render()
    {
    return ( <div>
        <h1>{this.state.message} </h1>
        <button onClick={this.changeMessage}>Subscribe me</button>        
            
         </div>     
        ) ; 
    }
}
export default Message;