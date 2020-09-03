import React from "react";
import { Circle, Container } from "./styles/LoadingStyle";
const Loading = () => {
    return (
        <Container>
            <Circle xmlns="http://www.w3.org/2000/svg">
                <circle cy="70" cx="70" r="70"></circle>
            </Circle>
        </Container>
    );
};

export default Loading;
