var React = require('react');
var ReactDOM = require('react-dom');


var Form = React.createClass({
    render: function() {
        return (
           <form>
               <input placeholder="name"/>
               <input placeholder="login"/>
               <input type="submit"/>
           </form>
        )}
});


var container = document.getElementById('example');
ReactDOM.render(<Form/>, container);
