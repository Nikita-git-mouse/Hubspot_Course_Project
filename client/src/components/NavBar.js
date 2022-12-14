import React, {useContext} from 'react';
import {Context} from '../index';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE,ACCOUNT_ROUTE, GROUP_ROUTE,TABLE_ROUTE,MATERIALS_ROUTE, ERROR_ROUTE, AUTH_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";

const NavBar = () => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>

                <Navbar.Brand href="/Account">Home</Navbar.Brand>
                <Nav className="me-auto">

                    <Nav.Link href="/Group">Group</Nav.Link>
                    <Nav.Link href="/Workmaterials">Work Materials</Nav.Link>
                    <Nav.Link href="/Timetable">Time Table</Nav.Link>
                </Nav>
                <Nav className="m-lg-0auto">
                    <Button size={ "sm" } variant={'outline-light'}><Nav.Link style={{color:'white'}} href={'/login'}>SELECT USER</Nav.Link></Button>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;