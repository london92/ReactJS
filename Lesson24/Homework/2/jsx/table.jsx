import React from 'react'; 
import {users} from './arr.jsx'
export default class Table extends React.Component {
    render() {
        return(
            <table>
                <thead>
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Gender</td>
                    </tr>
                </thead>
                <tbody>
                {users.map(user => <tr>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.gender}</td>
                </tr>)}
                </tbody>
            </table>
      )}
} 
