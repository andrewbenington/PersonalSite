import ReactGA from "react-ga4";
import Pages from "../consts/Pages";
import { NavBar, NavLink, NavListItem } from "./style";

function Navigation(props: { handler: Function }) {
    return (
        <NavBar>
            {Pages.filter((page) => !page.excludeFromHeader).map((page) => {
                return (
                    <NavListItem>
                        <NavLink
                            to="/"
                            onClick={() => {
                                ReactGA.send({
                                    hitType: "pageview",
                                    page: page.path,
                                    title: page.name,
                                });
                                props.handler(page.name);
                            }}
                        >
                            {page.name}
                        </NavLink>
                    </NavListItem>
                );
            })}
        </NavBar>
    );
}

export default Navigation;
