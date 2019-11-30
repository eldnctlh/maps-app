import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 100px;
    background: wheat;
`;

const Item = styled.div`
    margin-right: 20px;
    padding: 30px;
    a {
        text-decoration: none;
        font-size: 18px;
    }
`;

const Header = () => (
    <Wrapper>
        <Item>
            <Link to="/">Main Page</Link>
        </Item>
        <Item>
            <Link to="/about">About author</Link>
        </Item>
        <Item>
            <Link to="/auth">Authorization</Link>
        </Item>
    </Wrapper>
)

export default Header;