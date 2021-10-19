import React from 'react'
import { MiddleHeader } from './MiddleHeader'
import { MiddleNavbar } from './MiddleNavbar'
import { AboutMe } from './AboutMe'
import { Experiences } from './Experiences'
import { Contact } from './Contact'
import { Projects } from './Projects'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import "./styles/middle.css"

const Middle = () => {
    return (
        <div className="content">

            <MiddleHeader></MiddleHeader>
            <Router>
                <MiddleNavbar></MiddleNavbar>
                <Switch>
                    <Route path="/" exact component={Projects} />
                    <Route path="/about" component={AboutMe} />
                    <Route path="/experiences" component={Experiences} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </Router>
        </div>
    )
}

export default Middle
