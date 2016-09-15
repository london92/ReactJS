import React from 'react';
import ReactDOM from 'react-dom';

let users = [
    {firstName: "Jim",lastName: "Carey"},
    {firstName: "Tom",lastName: "Cruise"},
    {firstName: "Angelina",lastName: "Jolie"},
    {firstName: "Keanu",lastName: "Reeves"}
]

class AddApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {userList: users}
        this.add = this.add.bind(this)
    }
    add(){
        let userAdd = {};
        userAdd.firstName = document.getElementsByTagName("input")[0].value;
        userAdd.lastName = document.getElementsByTagName("input")[1].value;
        users.push(userAdd);
        this.setState({usersList:users});
    }
    render(){
        return(
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.userList.map((user)=>{
                        return(
                            <tr key={user.firstName}>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>

                <input type="text" placeholder="FirstName"/>
                <br/>
                <input type="text" placeholder="Last Name"/>
                <br/>
                <button onClick={this.add}>Add</button>
            </div>
        )
    }
}
export default AddApp