var React = require('react');
var ReactDOM = require('react-dom');
var Parent = React.createClass({
    render: function () {
        return(
            <h1>Hello<Child></Child></h1>
        )
    }
})
var Child = React.createClass({
    render: function () {
        return(
            <h3>world</h3>
        )
    }
})

var container = document.getElementById('example');
ReactDOM.render(<Parent></Parent>, container);
