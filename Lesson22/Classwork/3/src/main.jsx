import React from 'react';
import ReactDOM from 'react-dom'; 

class Button extends React.Component{
    constructor(props){
        super(props)
        this.state={vision:false}
        this.show = this.show.bind(this);
    }
    show(){
        this.setState({vision:true})
    }
    render(){
        return(
          <div>
              <button onClick={this.show}>Click Me</button>
              
              {this.state.vision ?
                    <ol>
                        {Object.keys(this.props).map(prop =>
                            <li key={prop}>{this.props[prop]}</li>
                        )}
                    </ol>
                  : ""
              }
          </div>
        )
    }
}
ReactDOM.render(<Button name="my button" title="go click"prop="my property"></Button>,document.getElementById("example"));