var React = require('react');
var ReactDOM = require('react-dom');
var ValidationMixin = {
    getInitialState: function () {
        return{
            inputError: "",
        }
    },
    validation: function (e) {
        if(e.target == document.getElementsByTagName("input")[0]){
            var testName = /^[a-zA-Z]+$/
            this.setState({name: e.target.value})
            if(document.getElementsByTagName("input")[0].value.search(testName) != -1){
                this.setState({inputError: ""})
            }
            else {
                if(e.target.value == ""){
                    this.setState({inputError: ""})
                }
                else {
                    this.setState({inputError: "Name should contain latin letters"})
                }
            }
        }
        else if(e.target == document.getElementsByTagName("input")[1]){
            var testEmail = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i
            this.setState({name: e.target.value})
            if(document.getElementsByTagName("input")[1].value.search(testEmail) != -1){
                this.setState({inputError: ""})
            }
            else {
                if(e.target.value == ""){
                    this.setState({inputError: ""})
                }
                else {
                    this.setState({inputError: "Invalid Email"})
                }
            }
        }
        else if(e.target == document.getElementsByTagName("input")[2]){
            var testTel = /^[0-9]{1,10}$/
            this.setState({name: e.target.value})
            if(document.getElementsByTagName("input")[2].value.search(testTel) != -1){
                this.setState({inputError: ""})
            }
            else {
                if(e.target.value == ""){
                    this.setState({inputError: ""})
                }
                else {
                    this.setState({inputError: "Invalid Telephone"})
                }
            }
        }
    }
}
var Form = React.createClass({
    render: function () {
      return(
          <form>
              <Input type="text" placeholder="Name"/>
              <Input type="text" placeholder="Email"/>
              <Input type="text" placeholder="Telephone"/>
              <Text placeholder="Message" rows="5"></Text>
          </form>
      )
    }
})
var Input = React.createClass({
    mixins:[ValidationMixin],
    render: function () {
        return(
            <div>
                <input type={this.props.type} placeholder={this.props.placeholder} onInput={this.validation} className="input-lg form-control"/>
                <span className="error">{this.state.inputError}</span>
            </div>
        )
    }
})
var Text = React.createClass({
    mixins:[ValidationMixin],
    render: function () {
        return(
            <textarea placeholder={this.props.placeholder} rows={this.props.rows} className="input-lg form-control"/>
        )
    }
})
var container = document.getElementById("example");
ReactDOM.render(<Form></Form>,container);