import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,Link,hashHistory,IndexRoute} from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import List from './list.jsx'
import Table from './table.jsx'
import User from './user.jsx'


class App extends React.Component{
    constructor(props){
       super(props);
    }
    render(){
        const animProps = {
            transitionName:"example",
            transitionEnterTimeout: 500,
            transitionLeaveTimeout: 300,
            component: 'div',
            transitionAppear: true,
            transitionAppearTimeout: 300
        }
        return(
            <div>
                <Link to="/listView"><button>listView</button></Link>
                <Link to="/tableView"><button>tableView</button></Link>
                <div>
                    <ReactCSSTransitionGroup {...animProps}>
                        {React.cloneElement(this.props.children,{
                            key: Math.random()
                        })}
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        )
    }
}
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={List}/>
            <Route key="1" path="listView" component={List}/>
            <Route key="2" path="tableView" component={Table}/>
            
            <Route path="listView/:id" component={User}/>
            <Route path="tableView/:id" component={User}/>
        </Route>
    </Router>,document.getElementById("example"))