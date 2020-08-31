import React from "react";
import {
    Container,
    Content,
    WrapperForm,
    FormUser,
    Input,
    ButtonSubmit,
    LoginInfo,
} from "./FormStyle";
const Form = () => {
    return (
        <Container>
            <Content></Content>
            <WrapperForm>
                <FormUser>
                    <Input />
                    <Input />
                    <ButtonSubmit />
                    <LoginInfo>
                        <span>Remember me</span>
                        <span>Forgot your password?</span>
                    </LoginInfo>
                </FormUser>
            </WrapperForm>
        </Container>
    );
};

export default Form;
