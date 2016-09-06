var React = require('react');
var ReactDOM = require('react-dom');


var Sum = React.createClass({
    render() {
        return<h1>{+this.props.first + +this.props.second}</h1>
    }
})
ReactDOM.render(<Sum first="5" second="5"/>,document.getElementById("example"))

