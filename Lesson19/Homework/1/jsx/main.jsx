var React = require('react');
var ReactDOM = require('react-dom');


var Table = React.createClass({

    getDefaultProps: function() {
        return {
            users: [{name:"Anne Montgomery",gender:"Female"},
                {name:"Annie George",gender:"Female"},
                {name:"Gary Butler",gender:"Male"},
                {name:"Lisa Mendoza",gender:"Female"},
                {name:"Marilyn Henry",gender:"Female"},
                {name:"Johnny Tucker",gender:"Male"},
                {name:"Chris Jacobs",gender:"Male"},
                {name:"Benjamin James",gender:"Male"}]
        }
    },

    render: function() {
        return (
            <table>
                    {this.props.users.map(function(user) {
                        return <TableRow name={user.name} gender={user.gender}>1</TableRow>
                    })}
            </table>
        )}
});

var TableRow = React.createClass({
    render: function() {
        return (
           <tr>
               <td>{this.props.name}</td>
               <td>{this.props.gender}</td>
           </tr>
        )}
});

var container = document.getElementById('example');
ReactDOM.render(<Table><TableRow/></Table>, container); 
