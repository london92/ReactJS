var React = require('react');
var ReactDOM = require('react-dom');
var WrapStyle = React.createClass({
    getInitialState: function () {
        return{
            checkbox: false
        }
    },
    handler: function () {
        this.setState({checkbox: !this.state.checkbox})
    },
    render: function () {
        var style;
        if(this.state.checkbox){
            style = "circle"
        }
        else {
            style ="rectangle"
        }
        return(
            <div>
                <div className={style}></div>
                <p>Press chechbox to change style</p>
                <input type="checkbox" onChange={this.handler} defaultChecked={this.state.checkbox}/>
            </div>

        )
    }
})
var container = document.getElementById('example');
ReactDOM.render(<WrapStyle></WrapStyle>, container);
