import React, { useState } from "react";
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
    const [form, setForm] = useState({
        name: "",
        email: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleChange(e) {
        let id = e.target.getAttribute("data-speed");
        const label = document.querySelectorAll(".x-rotulo-ab")[id];

        setForm({
            ...form,
            [e.target.id]: e.target.value,
        });

        if (e.target.value) {
            label.classList.add("active");
            verificarForm(e);
        } else {
            label.classList.remove("active");
        }
        function verificarForm(e) {
            let expression = /^a-z0.9./;
            if (e.target.value) {
                alert("ok");
            }
        }
    }
    return (
        <Container>
            <Content>
                <h2>
                    Este site foi totalmente desenvolvido por
                    <span>Marcos Proença</span>
                </h2>
                <p>
                    Site simples, mais objetivo. O intuito é mostrar um pouco de
                    UI, deixando claro algumas habilidades.
                </p>
            </Content>
            <WrapperForm onSubmit={handleSubmit}>
                <h2>Faça login</h2>
                <FormUser>
                    <WrapperInput>
                        <Input
                            data-speed="0"
                            value={form.name}
                            id="name"
                            onChange={handleChange}
                        />
                        <label className="x-rotulo-ab" htmlFor="">
                            Nome
                        </label>
                        <UserIcon />
                    </WrapperInput>
                    <WrapperInput>
                        <Input
                            data-speed="1"
                            value={form.email}
                            id="email"
                            onChange={handleChange}
                        />
                        <label className="x-rotulo-ab" htmlFor="">
                            E-mail
                        </label>
                        <PassIcon />
                    </WrapperInput>
                    <Button type="submit">Login</Button>
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
