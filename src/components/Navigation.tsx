import { NavBar, NavLink, NavListItem } from "./style";

function Navigation(props: { handler: Function }) {
    return (
        <NavBar>
            <NavListItem>
                <NavLink
                    to="/"
                    onClick={() => {
                        props.handler("About");
                    }}
                >
                    {" "}
                    About{" "}
                </NavLink>
            </NavListItem>
            <NavListItem>
                <NavLink
                    to="/skills"
                    onClick={() => {
                        props.handler("Skills");
                    }}
                >
                    {" "}
                    Skills{" "}
                </NavLink>
            </NavListItem>
            <NavListItem>
                <NavLink
                    to="/projects"
                    onClick={() => {
                        props.handler("Projects");
                    }}
                >
                    {" "}
                    Projects{" "}
                </NavLink>
            </NavListItem>
            <NavListItem>
                <NavLink
                    to="/classes"
                    onClick={() => {
                        props.handler("Classes");
                    }}
                >
                    {" "}
                    Classes{" "}
                </NavLink>
            </NavListItem>
            <NavListItem>
                <NavLink
                    to="/contact"
                    onClick={() => {
                        props.handler("Contact");
                    }}
                >
                    {" "}
                    Contact{" "}
                </NavLink>
            </NavListItem>
        </NavBar>
    );
}

export default Navigation;
