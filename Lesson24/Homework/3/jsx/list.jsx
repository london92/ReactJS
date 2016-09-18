import React from 'react';
import {users} from './arr.jsx'
import {Link} from 'react-router'

export default class List extends React.Component {
    render() {
        return(
            <ul>
                {users.map(user => <li key={user.id}>
                    <Link to={{pathname: `/listView/:${user.id}`,
                    query: {first_name: user.first_name, last_name: user.last_name, email: user.email, gender: user.gender, ip_address: user.ip_address, id: user.id} }}>First Name: {user.first_name}, Last Name: {user.last_name}</Link>
                </li>)}
            </ul>
        )}
}