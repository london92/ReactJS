import React from 'react';
import ReactDOM from 'react-dom'; 

class Button extends React.Component{
    constructor(props){
        super(props)
        this.show = this.show.bind(this);
    }
    show(){
        alert("hi")    
    }
    render(){
        return(
            <button onClick={this.show}>Click Me</button>
        )
    }
}
ReactDOM.render(<Button></Button>,document.getElementById("example"));