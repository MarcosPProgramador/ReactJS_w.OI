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
        const el = e.target;

        setForm({
            ...form,
            [el.id]: el.value,
        });

        if (el.value && el.value.length < 38) {
            label.classList.add("active");
            verificarForm(e);
        } else {
            label.classList.remove("active");
        }
        function verificarForm() {
            const completeOrError = {
                complete() {
                    el.classList.remove("error");
                    el.classList.add("complete");
                },
                error() {
                    el.classList.remove("complete");
                    el.classList.add("error");
                },
                verified(rgEx, key) {
                    if (rgEx[key]) completeOrError.complete();
                    else completeOrError.error();
                },
            };
            let key = Number(el.getAttribute("data-speed"));

            let rgEx = [
                {
                    expressionRel(iterator) {
                        return iterator.match(/[a-z]/);
                    },

                    verified(key) {
                        var amount = el.value.split(" ").length;
                        var item = el.value.split(" ");
                        
                        if (amount >= 2) {
                            for (const iterator of item) {
                                if (rgEx[key].expressionRel(iterator)) {
                                    console.log(iterator)
                                    completeOrError.complete();
                                }
                            }
                        } else {
                            completeOrError.error();
                        }
                    },
                },
                el.value.match(/([a-z0-9-_.])+@+([a-z])+.com/),
            ];

            switch (key) {
                case 0:
                    rgEx[key].verified(key);
                    break;
                case 1:
                    completeOrError.verified(rgEx, key);
                    break;
                default:
                    break;
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
                <FormUser className="z-xformul-af">
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
