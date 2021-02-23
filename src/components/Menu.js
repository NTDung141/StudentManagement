import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";

const menu = [
    {
        name: "Home",
        to: "/",
        exact: true
    },
    {
        name: "Student list",
        to: "/students",
        exact: false
    },
    {
        name: "Add new",
        to: "/add",
        exact: false
    },
    {
        name: "Login",
        to: "/login",
        exact: false
    }
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            var active = match ? "nav-item active" : "nav-item";
            return (
                <li className={active}>
                    <NavLink to={to} className="nav-link">
                        {label}
                    </NavLink>
                </li>
            )
        }} />
    )
}

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {this.showMenu(menu)}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

    showMenu(menu) {
        var result = null;
        if (menu.length > 0) {
            result = menu.map((item, index) => {
                return (
                    <MenuLink label={item.name} to={item.to} activeOnlyWhenExact={item.exact} />
                )
            })
        }
        return result;
    }
}

export default Menu;