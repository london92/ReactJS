import React from 'react'; 
import {users} from './arr.jsx'

export default class List extends React.Component {
    render() {
        return(
                <ul>
                    {users.map(user => <li key={user.id}>First Name: {user.first_name}, Last Name: {user.last_name}</li>)}
                </ul>
      )}
} 