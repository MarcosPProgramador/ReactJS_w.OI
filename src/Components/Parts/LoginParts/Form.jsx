import React from "react";
import {
    Container,
    Content,
    WrapperForm,
    FormUser,
    Input,
    LoginInfo,
    WrapperInput,
    UserIcon,
    PassIcon,
} from "./FormStyle";

import { Button } from "../../Global/Button/Button";
const Form = () => {
    return (
        <Container>
            <Content>
                <h2>
                    Este site foi totalmente desenvolvido por{" "}
                    <span>Marcos Proença</span>
                </h2>
                <p>
                    Site simples, mais objetivo. O intuito é mostrar um pouco de
                    UI, deixando claro algumas habilidades.
                </p>
            </Content>
            <WrapperForm>
                <h2>Faça login</h2>
                <FormUser>
                    <WrapperInput>
                        <Input />
                        <label htmlFor="">Nome</label>
                        <UserIcon />
                    </WrapperInput>
                    <WrapperInput>
                        <Input />
                        <label htmlFor="">E-mail</label>
                        <PassIcon />
                    </WrapperInput>
                    <Button>Login</Button>
                    <LoginInfo>
                        <span>Lembrar de mim</span>
                        <span>Esqueceu a senha?</span>
                    </LoginInfo>
                </FormUser>
            </WrapperForm>
        </Container>
    );
};

export default Form;
