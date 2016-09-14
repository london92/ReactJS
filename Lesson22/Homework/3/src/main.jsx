import React from 'react';
import ReactDOM from 'react-dom';
import {users} from '../users'

class Table extends React.Component{
    constructor(props){
        super();
        this.show = this.show.bind(this);
    }
    show(user){
        user.sayHi();
    }
    render(){
        return(
            <table>
                <thead>
                </thead>
                <tbody>
                {users.map((user)=>{
                    return(
                        <tr key={user.id}>
                            <td onClick={()=>this.show(user)}>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.age}</td>
                            <td>{user.gender}</td>
                            <td>{user.signUpDate}</td>
                            <td>{user.id}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        )
    }
}
ReactDOM.render(<Table></Table>,document.getElementById("example"));