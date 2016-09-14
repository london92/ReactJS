import React from 'react';
import ReactDOM from 'react-dom';

class Heading extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <h1>Hello from heading.jsx with browserify help</h1>
        )
    }
}
export {Heading}