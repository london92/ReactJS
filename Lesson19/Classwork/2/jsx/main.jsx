var React = require('react');
var ReactDOM = require('react-dom');


var Header = React.createClass({
    render: function () {
        return (<h1>Hello World</h1>)
    }
})
ReactDOM.render(<Header/>, document.getElementById("example"))

