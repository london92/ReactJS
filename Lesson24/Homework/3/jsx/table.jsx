import React from 'react'; 
import {users} from './arr.jsx'
import {Link} from 'react-router'

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

                        <td><Link to={{pathname: `/tableView/:${user.id}`,
                    query: {first_name: user.first_name, last_name: user.last_name, email: user.email, gender: user.gender, ip_address: user.ip_address, id: user.id} }}>{user.first_name}</Link></td>
                        <td>{user.last_name}</td>
                        <td>{user.gender}</td>

                </tr>)}
                </tbody>
            </table>
      )}
} 
