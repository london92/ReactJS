var React = require('react');
var ReactDOM = require('react-dom');
var List = React.createClass({
    getDefaultProps: function() {
        return {
            users: [{name:"Anne Montgomery",gender:"Female"},
                {name:"Annie George",gender:"Female"},
                {name:"Gary Butler",gender:"Male"},
                {name:"Lisa Mendoza",gender:"Female"},
                {name:"Marilyn Henry",gender:"Female"},
                {name:"Johnny Tucker",gender:"Male"},
                {name:"Chris Jacobs",gender:"Male"},
                {name:"Benjamin James",gender:"Male"}],

        }
    },
    getInitialState: function () {
        return{
            output_users:this.props.users
        }
    },
    handler: function (e) {
        var arr = this.props.users
        var new_arr = arr.slice(0, e.target.value)
        this.setState({output_users: new_arr})
    },
    render: function () {
        return(
            <div>
                <ol>
                    {this.state.output_users.map(function (user) {
                        return <li key={user.name}>Name: {user.name}, gender:{user.gender}</li>
                    })}
                </ol>
                <input type="text" onChange={this.handler} />
            </div>
        )
    }
})
var Item = React.createClass({
    render: function () {
        return(
            <li>Name: {this.props.name}, gender : {this.props.gender}</li>
        )
    }
})
var container = document.getElementById('example');
ReactDOM.render(<List><Item></Item></List>, container);
