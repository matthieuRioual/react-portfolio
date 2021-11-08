import React from 'react'
import { MiddleHeader } from './MiddleHeader'
import { MiddleNavbar } from './MiddleNavbar'
import { AboutMe } from './AboutMe'
import { Experiences } from './Experiences'
import { Projects } from './Projects'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Middle = () => {
    return (
        <div className="content d-none d-sm-block">

            <MiddleHeader></MiddleHeader>
            <Router>
                <MiddleNavbar></MiddleNavbar>
                <Switch>
                    <Route path="/" exact component={Projects} />
                    <Route path="/about" component={AboutMe} />
                    <Route path="/experiences" component={Experiences} />
                </Switch>
            </Router>
        </div>
    )
}

export default Middle
