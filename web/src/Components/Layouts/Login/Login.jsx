import React from "react";

import { Container } from "./LoginStyle";
import Form from "../../Parts/LoginParts/Form";
import Footer from "../../Parts/LoginParts/Footer";

const Login = () => {
    return (
        <Container>
            <Form />
            <Footer />
        </Container>
    );
};

export default Login;
