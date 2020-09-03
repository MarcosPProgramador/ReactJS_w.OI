import React from "react";
import {
    Container,
    List,
    Elements,
    ContainerMobile,
    ListMobile,
    ElementsMobile,
    HamburguerIcon,
    LogoBread,
} from "./NavBarStyle";

import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <>
            <Container>
                <LogoBread />
                <List>
                    <Elements>
                        <Link to="/">Home</Link>
                    </Elements>
                    <Elements>
                        <Link to="/sobre">Sobre</Link>
                    </Elements>
                    <Elements>
                        <Link to="/api">Api's</Link>
                    </Elements>
                </List>
            </Container>
            <HamburguerIcon className="">
                <span></span>
                <span></span>
            </HamburguerIcon>
            <ContainerMobile className="">
                <ListMobile>
                    <ElementsMobile>
                        <Link to="/">Home</Link>
                    </ElementsMobile>
                    <ElementsMobile>
                        <Link to="/sobre">Sobre</Link>
                    </ElementsMobile>
                    <ElementsMobile>
                        <Link to="/api">Api's</Link>
                    </ElementsMobile>
                </ListMobile>
            </ContainerMobile>
        </>
    );
};

export default NavBar;
