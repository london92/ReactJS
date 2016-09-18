import React from 'react';
import {users} from './arr.jsx'

export default class User extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let location = this.props.location
        let first = location.query.first_name
        return(
            <div>
                <p>First Name:{first} </p>
                <p>Last Name:{location.query.last_name} </p>
                <p>Email:{location.query.email} </p>
                <p>Gender:{location.query.gender} </p>
                <p>IP address:{location.query.ip_address} </p>
            </div>
        )}
}