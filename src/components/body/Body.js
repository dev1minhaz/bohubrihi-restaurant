import React from 'react'
import Menu from './Menu'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import { Redirect, Route, Switch } from 'react-router'

const Body = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exect component={Home} />
                <Route path="/menu" exect component={Menu} />
                <Route path="/contact" exect component={Contact} />
                <Route path="/about" exect component={About} />
                <Redirect from="/" to="/home" />
            </Switch>
        </div>
    )
}

export default Body
