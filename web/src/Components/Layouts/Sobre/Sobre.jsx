import React from "react";
import { Container, Overlay } from "./SobreStyle";

import SectionOne from "../../Parts/SobreParts/SectionOne";

import SectionTwo from "../../Parts/SobreParts/SectionTwo";
const Sobre = () => {
    return (
        <>
            <Overlay />
            <Container>
                <SectionOne />
                <SectionTwo />
            </Container>
        </>
    );
};

export default Sobre;
