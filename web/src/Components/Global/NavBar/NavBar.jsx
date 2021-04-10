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
    function handleMouseEnter(e) {
        const Html = document.querySelector("html");

        window.scrollTo({
            top: 0,
        });
        Html.classList.toggle("active");

        e.currentTarget.classList.toggle("active");
    }

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
            <HamburguerIcon onClick={handleMouseEnter}>
                <span></span>
                <span></span>
            </HamburguerIcon>
            <ContainerMobile>
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
