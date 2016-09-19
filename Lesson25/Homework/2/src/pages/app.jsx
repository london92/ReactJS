import React from 'react'

import appStore from '../Stores/appStore'
import * as appActions from '../Actions/appActions'
import {list} from "./list.js"

export default class App extends React.Component{
    constructor() {
        super() 
        
        this.state = {
           list: list
        }
      
    } 

    componentWillMount() {
        // создание обработчика flux событий
        appStore.on('add', () => {
            appStore.add();
            this.getList();
            }
        )
        appStore.on('delete', () => {
                appStore.delete();
                this.getList();
            }
        )
        appStore.on('search', () => {
                appStore.search();
                this.getFilterList();
            }
        )
        
    }
    
    getList(){
        this.setState({list: appStore.getList()})
    }
    getFilterList(){
        this.setState({list: appStore.getFilterList()})
    }
    addHandler(){
       appActions.add();
   }
    deleteHandler(){
        appActions.deleteItem();
    }
    searchHandler(){
        appActions.searchItems();    
    }
    
    render() {
        return (
            <div className="panel well">
               <ol>
                   {this.state.list.map((task)=>
                   <li key={task}>{task}</li>)}
               </ol>
                <input type="text" placeholder="Yout task"/>
                <button onClick={this.addHandler}>Add</button>
                <br/>
                <input type="number" placeholder="Enter number of deleted task"/>
                <button onClick={this.deleteHandler}>Delete</button>
                <br/>
                <input type="text" placeholder="Search"/>
                <button onClick={this.searchHandler}>Search</button>
            </div>
    )}
}
