import React from "react"
import { NavBar, NavListItem, NavLink } from "./style"

interface NavInterface {
    handler: Function;
}

class Navigation extends React.Component<NavInterface> {
    render() {
        return <NavBar>
            <NavListItem>
                <NavLink to="/" onClick={() => { this.props.handler("About") }} > About </NavLink>
            </NavListItem>
            <NavListItem >
                <NavLink to="/skills" onClick={() => {this.props.handler("Skills");}}> Skills </NavLink>
            </NavListItem>
            <NavListItem >
                <NavLink to="/classes" onClick={() => {this.props.handler("Classes");}}> Classes </NavLink>
            </NavListItem>
            <NavListItem >
                <NavLink to="/projects" onClick={() => {this.props.handler("Projects");}}> Projects </NavLink>
            </NavListItem>
            <NavListItem >
                <NavLink to="/contact" onClick={() => {this.props.handler("Contact");}}> Contact </NavLink>
            </NavListItem>
        </NavBar>
    }
};

export default Navigation;