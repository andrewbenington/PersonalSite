import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Banner = styled.div`
    display: flex;
    flex-direction: column;
    color: #ffffff;
    min-height: 214px;
    max-height: 214px;
    font-weight: bold;
    text-shadow: 0 3px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`

export const Headshot = styled.img`
    height: 214px;
    float: left;
    width: auto;
`

export const Name = styled.div`
    line-height: 1;
    margin: 0px;
    padding-left: 30px;
    font-size: 30px;
    text-align: left;
    padding-top: 30px;
    margin: 0px;
    float: left;
    color: #ffffff;
`

export const PageTitle = styled.div`
    line-height: 1;
    margin: 0px;
    width: fit-content;
    font-size: 40px;
    text-align: right;
    padding-right: 30px;
    padding-top: 30px;
    float: left;
    max-height: 214px;
    line-height: 1;
    margin: 0px;
    font-size: 60px;
`

export const Info = styled.div`
    font-size: 18px;
    padding-left: 30px;
    line-height: 1;
    width: 100%
`

export const NavListItem = styled.li`
    background-color: #575555;
    display: inline-block;
    font-size: 20px;
    cursor: pointer;
    &:hover {
        background-color: grey;
      }
`

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
    width: 100%;
    justify-content: center;
`