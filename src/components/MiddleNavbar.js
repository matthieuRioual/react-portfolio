import React from 'react'
import { NavLink } from 'react-router-dom'

export const MiddleNavbar = () => {
    return (
        <ul className="nav">
            <NavLink to="/" activeClassName="nav-active">
                <li className="navbaritem">

                    My Projects


                </li>
            </NavLink>
            <NavLink to="/about" activeClassName="nav-active">
                <li className="navbaritem">

                    About Me


                </li>
            </NavLink>
            <NavLink to="/experiences" activeClassName="nav-active">
                <li className="navbaritem">

                    My Experiences


                </li>
            </NavLink>
            <NavLink to="/contact" activeClassName="nav-active">
                <li className="navbaritem">

                    Contact

                </li>
            </NavLink>

        </ul>
    )
}
