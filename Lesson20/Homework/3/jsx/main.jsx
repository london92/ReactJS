var React = require('react');
var ReactDOM = require('react-dom');
var SetMyMixin ={
    getInitialState: function () {
        return{
            color: this.random_color()
        }
    },
    random_color: function (){
        var h = Math.floor(Math.random() * (255 - 1) + 1);
        var s = Math.floor(Math.random() * (100 - 1) + 1) + '%';
        var l = '50%';
        var randomColor = 'hsl(' + h + ',' + s + ',' + l + ')';
        return randomColor;
    },
    componentWillReceiveProps: function () {
        this.setState({color:this.random_color()})
    }
}
var List = React.createClass({
    getDefaultProps: function () {
        return{
            users : [{name:"Anne Montgomery",gender:"Female"},
                {name:"Annie George",gender:"Female"},
                {name:"Gary Butler",gender:"Male"},
                {name:"Lisa Mendoza",gender:"Female"},
                {name:"Marilyn Henry",gender:"Female"},
                {name:"Johnny Tucker",gender:"Male"},
                {name:"Chris Jacobs",gender:"Male"},
                {name:"Benjamin James",gender:"Male"}]
        }
    },
    getInitialState: function () {
        return{
            output:this.props.users,
            checkbox: true
        }
    },
    handler: function (e) {
        var arr = this.props.users
        var new_arr = arr.slice(0, e.target.value)
        this.setState({output: new_arr})
    },
    change_view: function () {
      this.setState({checkbox:!this.state.checkbox})  
    },
    render: function () {
        if(this.state.checkbox){
            return(
                <div>
                    <ol>
                        {this.state.output.map(function (user) {
                            return <Item key={user.name} name={user.name} gender={user.gender}></Item>
                        })}
                    </ol>
                    <input type="text" onChange={this.handler} />
                    <input type="checkbox" onChange={this.change_view}/>
                </div>
            )
        }
        else {
            return(
                <div>
                    <table>
                        {this.state.output.map(function (user) {
                            return <Row key={user.name} name={user.name} gender={user.gender}></Row>
                        })}
                    </table>
                    <input type="text" onChange={this.handler} />
                    <input type="checkbox" onChange={this.change_view}/>
                </div>
            )
        }
    }

})
var Item = React.createClass( {
    mixins:[SetMyMixin],
    render:function () {
        return(
            <li style={{"color":this.state.color}}>Name:{this.props.name}, gender:{this.props.gender}</li>
        )
    }
})
var Row = React.createClass( {
    mixins:[SetMyMixin],
    render:function () {
        return(
            <tr style={{"color":this.state.color}}><td>Name:{this.props.name}</td><td>gender:{this.props.gender}</td></tr>
        )
    }
})
var container = document.getElementById('example');
ReactDOM.render(<List><Item></Item></List>, container);