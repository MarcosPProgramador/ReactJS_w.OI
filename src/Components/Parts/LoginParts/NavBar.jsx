import React from "react";
import {
    Container,
    List,
    Elements,
    Links,
    ContainerMobile,
    ListMobile,
    ElementsMobile,
    LinksMobile,
    HamburguerIcon,
    LogoBread
} from "./NavBarStyle";
const NavBar = () => {
    return (
        <>
            <Container>
            <LogoBread />
                <List>
                    <Elements>
                        <Links href="#home">Home</Links>
                    </Elements>
                    <Elements>
                        <Links href="#sobre">Sobre</Links>
                    </Elements>
                    <Elements>
                        <Links href="#api">Api's</Links>
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
                        <LinksMobile href="#home">Home</LinksMobile>
                    </ElementsMobile>
                    <ElementsMobile>
                        <LinksMobile href="#sobre">Sobre</LinksMobile>
                    </ElementsMobile>
                    <ElementsMobile>
                        <LinksMobile href="#api">Api's</LinksMobile>
                    </ElementsMobile>
                </ListMobile>
            </ContainerMobile>
        </>
    );
};

export default NavBar;
