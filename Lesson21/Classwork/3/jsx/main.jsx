var React = require('react');
var ReactDOM = require('react-dom');
var Wrap = React.createClass({
    getInitialState: function () {
        return{
            seconds: 0
        }
    },
    componentDidMount: function(){
        this.interval = setInterval(this.tick, 1000)
    },
    tick: function () {
        this.setState({seconds: this.state.seconds + 1})
    },
    resetHandler: function () {
        clearInterval(this.interval)
        this.setState({seconds: 0})
    },
    startHandler: function () {
        clearInterval(this.interval)
        this.interval = setInterval(this.tick, 1000)

    },
    stopHandler: function () {
        clearInterval(this.interval)
    },
    render: function () {
      return(
          <div>
              <p>Seconds:{this.state.seconds}</p>
              <button onClick={this.resetHandler}>Reset</button>
              <button onClick={this.startHandler}>Start</button>
              <button onClick={this.stopHandler}>Stop</button>
          </div>
      )
    }
})
var container = document.getElementById("example");
ReactDOM.render(<Wrap></Wrap>,container);