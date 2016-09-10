var React = require('react');
var ReactDOM = require('react-dom');
var Form = React.createClass({
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
          <form>
              <input type="text" onInput={this.nameHandler} placeholder="Name" className="input-lg form-control"/>
              <input type="text" onInput={this.emailHandler} placeholder="Email" className="input-lg form-control" className="input-lg form-control"/>
              <input type="text" onInput={this.telHandler} placeholder="Telephone" className="input-lg form-control"/>
              <textarea onInput={this.messageHandler} placeholder="Message" className="input-lg form-control"></textarea>

          </form>
      )
    }
})
var container = document.getElementById("example");
ReactDOM.render(<Form></Form>,container);