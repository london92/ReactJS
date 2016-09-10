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
    render: function () {
      return(
          <div>
              <p>Seconds:{this.state.seconds}</p>
          </div>
      )
    }
})
var container = document.getElementById("example");
ReactDOM.render(<Wrap></Wrap>,container);