import React from 'react'
import { NavLink } from 'react-router-dom'

export function AppHeader() {
    return (
        <header className="app-header-container full main-root" >
            <section className="app-header">

                <NavLink exact to="/" className="header-logo clean-link">
                    <h1>Assignment</h1>
                </NavLink>

                <nav className="main-nav">

                    <NavLink exact to="/">
                        <div className="nav-btn-div home">
                            Login
                        </div>
                    </NavLink>

                    <NavLink to="/signup">
                        <div className="nav-btn-div">
                            SignUp
                        </div>
                    </NavLink>

                    <NavLink to="/about">
                        <div className="nav-btn-div">
                            About
                        </div>
                    </NavLink>

                </nav>
            </section>
        </header>
    )
        ;
}

