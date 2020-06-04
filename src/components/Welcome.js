import React from 'react';

class Welcome  extends React.Component
{
    render()
    {
    return ( <div>
        <h1>Hello {this.props.name} your age is {this.props.age}</h1>
        <br/>
        <h1>  {this.props.children}    </h1>        
         </div>     
        ) ; 
    }
}
export default Welcome;