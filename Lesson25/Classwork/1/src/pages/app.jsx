import React from 'react'

import appStore from '../Stores/appStore'
import * as appActions from '../Actions/appActions'

export default class App extends React.Component{
    constructor() {
        super() 
        
        this.state = {
            style: "black"
        }
        this.clickHandler = this.clickHandler.bind(this) 
    } 

    componentWillMount() { 
        // создание обработчика flux событий
        appStore.on('styleChange', () => {
            this.setState({ style: appStore.styleClicks() })
            }
        )
    }

    clickHandler() { 
     
        appActions.style(); 
    }

    render() {
        return (
            <div className="panel well">
                <button className="btn-lg btn-warning btn" onClick={this.clickHandler}>Click me!</button>
                <div className={this.state.style}></div>
            </div>
    )}
}
