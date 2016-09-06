var React = require('react');
var ReactDOM = require('react-dom');


var Paragraph = React.createClass({
    getDefaultProps(){
      return{

      }
    },
    render: function() {
        return (
           <p style={{"color":"red","fontSize": "40px"}}>Hello World</p>
        )}
});


var container = document.getElementById('example');
ReactDOM.render(<Paragraph></Paragraph>, container);
