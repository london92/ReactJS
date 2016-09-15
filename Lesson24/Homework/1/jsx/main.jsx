import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,Link,hashHistory} from 'react-router'

import List from './list.jsx'
import Table from './table.jsx'


class App extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <Link to="/listView"><button>listView</button></Link>
                <Link to="/tableView"><button>tableView</button></Link>
                <div>{this.props.children}</div>
            </div>
        )
    }
}
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route key="1" path="listView" component={List}/>
            <Route key="2" path="tableView" component={Table}/>
        </Route>
    </Router>,document.getElementById("example"))