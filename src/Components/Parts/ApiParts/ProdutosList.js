import React from "react";
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
    return (
        <Container>
            {produtos.map((produto, i) => (
                <Card key={i}>
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
