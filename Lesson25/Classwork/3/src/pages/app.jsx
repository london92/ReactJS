import React from 'react'

import appStore from '../Stores/appStore'
import * as appActions from '../Actions/appActions'

export default class App extends React.Component{
    constructor() {
        super() 
        
        this.state = {
           result:""
        }
        this.plusHandler = this.plusHandler.bind(this)
        this.minusHandler = this.minusHandler.bind(this)
        this.multiplyHandler = this.multiplyHandler.bind(this)
        this.divideHandler = this.divideHandler.bind(this)
        this.getResult = this.getResult.bind(this)
    } 

    componentWillMount() {
        // создание обработчика flux событий
        appStore.on('add', () => {
            appStore.plus();
            this.getResult();
            }
        )
        appStore.on('minus', () => {
                appStore.minus();
                this.getResult();
            }
        )
        appStore.on('multiply', () => {
            appStore.multiply();
            this.getResult();
            }
        )
        appStore.on('divide', () => {
                appStore.divide();
                this.getResult();
            }
        )
    }
    getResult(){
        this.setState({result: appStore.getResult()})
    }
    plusHandler() {
        appActions.plus(); 
    }
    minusHandler() {
        appActions.minus();
    }
    multiplyHandler() {
        appActions.multiply();
    }
    divideHandler() {
        appActions.divide();
    }
    
    render() {
        return (
            <div className="panel well">
                <input type="number"/>
                <br/>
                <input type="number"/>
                <br/>
                <button className="btn-lg btn-warning btn" onClick={this.plusHandler}>+</button>
                <button className="btn-lg btn-warning btn" onClick={this.minusHandler}>-</button>
                <button className="btn-lg btn-warning btn" onClick={this.multiplyHandler}>*</button>
                <button className="btn-lg btn-warning btn" onClick={this.divideHandler}>/</button>
                <div>{this.state.result}</div>
            </div>
    )}
}
