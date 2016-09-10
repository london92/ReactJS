var React = require('react');
var ReactDOM = require('react-dom');
var Wrap = React.createClass({
    getInitialState: function () {
        return{
            count: 5
        }
    },
    plusHandler: function () {
        this.setState({count: ++this.state.count})
    },
    minusHandler: function () {
        this.setState({count: --this.state.count})
    },
    render: function () {
      return(
          <div>
              <h1>{this.state.count}</h1>
              <button onClick={this.plusHandler}>+</button>
              <button onClick={this.minusHandler}>-</button>
          </div>
      )
    }
})
var container = document.getElementById("example");
ReactDOM.render(<Wrap></Wrap>,container);