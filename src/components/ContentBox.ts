import styled from "styled-components";

export default styled.div`
    background-color: #ffffff;
    width: 300px;
    margin: 15px;
    padding: 1px 15px 15px 15px;
    border-radius: 8px;
    text-decoration: none;
    align-self: center;
    p {
        a {
            color: blue;
            font-weight: bold;
            text-decoration: none;
            &:hover {
                color: grey;
            }
        }
    }
    h3 {
        a {
            color: #03153b;
            font-weight: bold;
            text-decoration: none;
            &:hover {
                color: grey;
            }
        }
    }
`;

export const ContentShell = styled.div`
    background-color: #fff;
    margin: 15px;
    width: 100%;
    padding: 15px 15px 15px 15px;
    border-radius: 3px;
    text-decoration: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    align-self: center;
    p {
        a {
            color: blue;
            font-weight: bold;
            text-decoration: none;
            &:hover {
                color: grey;
            }
        }
    }
    h3 {
        a {
            color: #03153b;
            font-weight: bold;
            text-decoration: none;
            &:hover {
                color: grey;
            }
        }
    }
`;
