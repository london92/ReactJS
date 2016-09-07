var React = require('react');
var ReactDOM = require('react-dom');
var Calc = React.createClass({
    getDefaultProps: function () {
        return{
            number_1: 5,
            number_2: 5,
            mode : true
        }
    },
    render: function () {
        if (this.props.mode) {
            return (
                <h1>{this.props.number_1 + this.props.number_2}</h1>
            )
        }
        else {
            return (
                <h1>{this.props.number_1.toString() + this.props.number_2.toString()}</h1>
            )
        }
    }
})
var container = document.getElementById('example');
ReactDOM.render(<Calc></Calc>, container);
