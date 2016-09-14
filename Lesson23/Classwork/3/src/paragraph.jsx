import React from 'react';
import ReactDOM from 'react-dom';

class Paragraph extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <p>Hello from paragraph.jsx</p>
        )
    }
}
export {Paragraph}