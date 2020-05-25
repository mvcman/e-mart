import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { Button } from './Button';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/" ><img className="App-logo" src={logo} alt="telephone" /></Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">Products</Link>
                    </li>
                </ul>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/news" className="nav-link">News</Link>
                    </li>
                </ul>
                <Link to="/store" className="ml-auto"><Button><span><i className="fas fa-cart-plus"></i></span> My cart</Button></Link>
            </NavWrapper>
        );
    }
}
const NavWrapper = styled.nav`
    background-color: var(--mainBlue);
    .nav-link {
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize !important;
    }
`;
//const ButtonContainer = styled.button`
//    text-transform: capitalize;
//    font-size: 1.4rem;
//    background-color: transparent;
//    border: 0.05rem solid var(--lightBlue);
//    color: var(--lightBlue);
//    border-radius: 0.5rem;
//    outline: none;
//    padding: 0.2rem 0.5rem;
//    cursor: pointer;
//    margin: 0.2rem 0.5rem;
//    transition: all 0.5s ease-in-out;
//    &:hover {
//        outline: none;
//        background-color: var(--lightBlue);
//        color: var(--mainBlue);
//    }
//    &:focus{
//        outline: none;
//    }
//`