import React from "react";

import { Container } from "./LoginStyle";
import NavBar from "../../Parts/LoginParts/NavBar";
import Form from "../../Parts/LoginParts/Form";
import Foot from "../../Parts/LoginParts/Foot";

const Login = () => {
    return (
        <Container>
            <NavBar />
            <Form />
            <Foot />
        </Container>
    );
};

export default Login;
