import React from 'react'

import appStore from '../Stores/appStore'
import * as appActions from '../Actions/appActions'

export default class App extends React.Component{
    constructor() {
        super() 
        
        this.state = {
            seconds: 0
        }
        this.startHandler = this.startHandler.bind(this)
        this.stopHandler = this.stopHandler.bind(this)
        this.resetHandler = this.resetHandler.bind(this)
        this.getSeconds = this.getSeconds.bind(this)
    } 

    componentWillMount() {
        var interval;
        // создание обработчика flux событий
        appStore.on('secondsChange', () => {
            appStore.startChange();
            interval = setInterval(this.getSeconds, 1000);
            }
        )
        appStore.on('stopChange', () => {
                appStore.stopChange();
                clearInterval(interval)
            }
        )
        appStore.on('resetChange', () => {
                appStore.resetChange();
                clearInterval(interval)
                this.getSeconds();
            }
        )
    }

    getSeconds(){
        this.setState({seconds: appStore.getSeconds()})
    }
    startHandler() {
        appActions.start(); 
    }
    stopHandler(){
        appActions.stop();
    }
    resetHandler(){
        appActions.reset();
    }

    componentDidMount(){
        this.startHandler();
    }

    render() {
        return (
            <div className="panel well">
                <button className="btn-lg btn-warning btn" onClick={this.startHandler}>Start</button>
                <button className="btn-lg btn-warning btn" onClick={this.stopHandler}>Stop</button>
                <button className="btn-lg btn-warning btn" onClick={this.resetHandler}>Reset</button>
                <div>{this.state.seconds}</div>
            </div>
    )}
}
