import React, { Component } from 'react'
import { ReactDOM, render } from 'react-dom'


//router library
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

//layout 
import Main from './layout/Main'
import Home from './layout/Home'

class App extends Component {

    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Main}>
                    <IndexRoute component={Home}></IndexRoute>
                    <Route path="/home" component={Home}></Route>

                </Route>
            </Router>
        )
    }
}

render( < App / > , document.getElementById('app'))