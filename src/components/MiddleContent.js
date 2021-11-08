import React from 'react'
import { AboutMe } from './AboutMe'
import { Experiences } from './Experiences'
import { Projects } from './Projects'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export const MiddleContent = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Projects} />
                <Route path="/about" component={AboutMe} />
                <Route path="/experiences" component={Experiences} />
            </Switch>

        </div>
    )
}
