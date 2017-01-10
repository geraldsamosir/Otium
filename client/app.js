import React, { Component } from 'react'
import { ReactDOM, render } from 'react-dom'


class App extends Component {
    requireAuth() {
        if (localStorage.getItem('login') != 'true') {
            browserHistory.push('/')

        }
    }

    render() {
        return (
            <div>
                heelo
            </div>
        )
    }
}

render( < App / > , document.getElementById('app'))