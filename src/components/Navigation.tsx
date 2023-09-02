import ReactGA from "react-ga4";
import Pages from "../consts/Pages";
import { NavBar, NavLink, NavListItem } from "./style";

function Navigation() {
    return (
        <NavBar>
            {Pages.filter((page) => !page.excludeFromHeader).map((page) => {
                return (
                    <NavListItem>
                        <NavLink
                            to={page.path}
                            onClick={() => {
                                ReactGA.send({
                                    hitType: "pageview",
                                    page: page.path,
                                    title: page.name,
                                });
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
