import React from "react";

import { Container } from "./LoginStyle";
import Form from "../../Parts/LoginParts/Form";
import Foot from "../../Parts/LoginParts/Foot";

const Login = () => {
    return (
        <Container>
            <Form />
            <Foot />
        </Container>
    );
};

export default Login;
