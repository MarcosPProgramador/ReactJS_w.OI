import React, { useEffect } from "react";
import {
    Container,
    Card,
    Image,
    CardPrice,
    CardName,
    Front,
    Back,
} from "./styles/ProdutosListStyle";

const ProdutosList = ({ produtos }) => {
    function handleHover(e) {
        e.currentTarget.classList.add('active')
    }
    return (
        <Container>
            {produtos.map((produto, i) => (
                <Card key={i}  onMouseEnter={handleHover}>
                    <Front>
                        <Image key={i} />
                    </Front>
                    <Back>
                        <CardName key={i + 1}>{produto.name}</CardName>
                        <CardPrice key={i + 2}>{produto.price}</CardPrice>
                    </Back>
                </Card>
            ))}
        </Container>
    );
};

export default ProdutosList;
