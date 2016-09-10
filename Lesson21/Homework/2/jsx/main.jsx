var React = require('react');
var ReactDOM = require('react-dom');
var Wrap = React.createClass({
    getInitialState: function () {
        return{
            result:"",
            number_1: "",
            number_2: ""
        }
    },
    firstNumberHandler: function (e) {
        this.setState({number_1: e.target.value})  
    },
    secondNumberHandler: function (e) {
        this.setState({number_2: e.target.value})
    },
    plusHandler: function () {
        this.setState({result: +this.state.number_1 + +this.state.number_2})
    },
    minusHandler: function () {
        this.setState({result: +this.state.number_1 - +this.state.number_2})
    },
    multiplyHandler: function () {
        this.setState({result: +this.state.number_1 * +this.state.number_2})
    },
    divideHandler: function () {
        this.setState({result: +this.state.number_1 / +this.state.number_2})
    },
    render: function () {
      return(
          <div>
              <input type="number" onChange={this.firstNumberHandler} />
              <input type="number" onChange={this.secondNumberHandler} />
              <button onClick={this.plusHandler}>+</button>
              <button onClick={this.minusHandler}>-</button>
              <button onClick={this.multiplyHandler}>*</button>
              <button onClick={this.divideHandler}>/</button>
              <h1>{this.state.result}</h1>

          </div>
      )
    }
})
var container = document.getElementById("example");
ReactDOM.render(<Wrap></Wrap>,container);