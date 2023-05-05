import ReactGA from "react-ga4";
import { NavBar, NavLink, NavListItem } from "./style";

function Navigation(props: { handler: Function }) {
    return (
        <NavBar>
            <NavListItem>
                <NavLink
                    to="/"
                    onClick={() => {
                        ReactGA.send({
                            hitType: "pageview",
                            page: "/",
                            title: "About",
                        });
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
                        ReactGA.send({
                            hitType: "pageview",
                            page: "/skills",
                            title: "Skills",
                        });
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
                        ReactGA.send({
                            hitType: "pageview",
                            page: "/projects",
                            title: "Projects",
                        });
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
                        ReactGA.send({
                            hitType: "pageview",
                            page: "/classes",
                            title: "Classes",
                        });
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
                        ReactGA.send({
                            hitType: "pageview",
                            page: "/contact",
                            title: "Contact",
                        });
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
