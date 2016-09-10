var React = require('react');
var ReactDOM = require('react-dom');
var Wrap = React.createClass({
    getInitialState: function () {
        return{
            class: "black"
        }
    },
    clickHandler: function () {
      if(this.state.class == "black"){
          this.setState({class: "red"})
      }
      else if(this.state.class == "red"){
          this.setState({class: "black"})
      }  
    },
    render: function () {
      return(
          <div>
              <div className={this.state.class}>
              </div>
              <button onClick={this.clickHandler}>Click me</button>
          </div>
      )
    }
})
var container = document.getElementById("example");
ReactDOM.render(<Wrap></Wrap>,container);