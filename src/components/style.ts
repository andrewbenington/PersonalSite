import { Link } from "react-router-dom";
import styled from "styled-components";

export const Banner = styled.div`
    display: flex;
    flex-direction: column;

    font-weight: bold;
`;

export const Headshot = styled.img`
    height: 180px;
    float: left;
    width: auto;
    margin-top: 20px;
    border-radius: 8px;
`;

export const Name = styled.div`
    line-height: 1;
    margin: 0px;
    padding-left: 20px;
    font-size: 30px;
    text-align: left;
    padding-top: 20px;
    margin: 0px;
    float: left;
`;

export const PageTitle = styled.div`
    line-height: 1;
    margin: 0px;
    width: 30%;
    font-size: 40px;
    text-align: right;
    padding-right: 20px;
    padding-top: 20px;
    float: left;
    max-height: 214px;
    line-height: 1;
    margin: 0px;
    font-size: 60px;
`;

export const MobileTitle = styled.div`
    font-size: 24px;
`;

export const Info = styled.div`
    font-size: 18px;
    margin-left: 20px;
    line-height: 1;
`;

export const NavListItem = styled.li`
    background-color: #575555;
    display: inline-block;
    font-size: 20px;
    cursor: pointer;
    &:hover {
        background-color: grey;
    }
`;

export const NavLink = styled(Link)`
    line-height: 1.1;
    padding: 10px 20px;
    &:link {
        color: white;
        text-align: center;
        text-decoration: none;
        box-sizing: padding-box;
    }
    &:hover {
        background-color: grey;
    }
    &:visited {
        color: white;
    }
`;

export const NavBar = styled.div`
    background-color: #575555;
    padding: 10px 0px;
    list-style-type: none;
    text-align: center;
    justify-content: center;
    border-radius: 8px;
    margin: 0px 10px;
`;
