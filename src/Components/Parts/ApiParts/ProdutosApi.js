import React, { useEffect, useState } from "react";
import ProdutosList from "./ProdutosList";
import Loading from "./Loading";

import {
    Container,
    Centralize,
    SocialNetwork,
    Social,
    FacebookIcon,
    LinkedinIcon,
    GitHubIcon,
    BackGroundFixed
} from "./styles/ProdutosApiStyle";

export default function ProdutosApi() {



    const [produto, setProduto] = useState([]);

    useEffect(() => {
        async function fetchProdutos(url) {
            const response = await fetch(url);
            const data = await response.json();
            setProduto(data);
        }
        fetchProdutos(
            "http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product"
        );
    }, []);
    console.log(produto)
    return (

        <Container>
            <BackGroundFixed />
            <Centralize>
                <h2>Produtos</h2>
            </Centralize>
            <SocialNetwork>
                <Social>
                    <a rel="noopener noreferrer" href="https://www.facebook.com/marcos.proenca.186/">

                    <FacebookIcon />

                    </a>
                </Social>
                <Social>
                    <a rel="noopener noreferrer"  href="https://www.linkedin.com/in/marcos-proença-5820101b1/">

                    <LinkedinIcon />

                    </a>
                </Social>
                <Social>
                    <a rel="noopener noreferrer"  href="https://github.com/MarcosPProgramador" target="_blank"

                    >
                    <GitHubIcon />

                    </a>
                </Social>
            </SocialNetwork>
            {produto.length ? <ProdutosList produtos={produto} /> : <Loading />}
        </Container>
    );
}
