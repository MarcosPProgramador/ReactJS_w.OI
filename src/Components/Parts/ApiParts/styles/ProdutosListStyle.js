import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    z-index: 2;
    margin: 0 auto;
    max-width: 1100px;
    display: flex;

    justify-content: center;
    flex-wrap: wrap;
    padding: 0 3%;
`;
export const Card = styled.div`

    background-color: white;
    padding: 7px 5px;
    display: flex;
    flex-direction: column;

    align-items: center;
    text-align: center;

    margin: 0 10px;
    margin-top: 20px;
    width: 300px;
    border-radius: 15px;

    box-shadow: 0 1px 2px gray;

    &:hover{
        > div:nth-child(1){
            transform: translate(0);
            > div {
                opacity: 1;

            }
        }
        > div:nth-last-child(1){
            transform: translate(0);
        }

    }
`;
export const Image = styled.div`
    border-radius: 12px;
    transition: opacity 1s;
    opacity: 0;
    width: 100%;
    height: 320px;
    background-image: url('./img/screen-pattern.png');
    display: flex;
    &::before{
        margin: auto;
        content:'image no';
        font-weight: bold;
        font-size: 32px;
        color: #222632;

    }

`;
export const CardPrice = styled.div`
    margin: 10px 0;
    padding: 5px 19px;

    border-radius: 12px;
    background-color: #ff4500;

    color: white;
    font-weight: bold;
`;
export const CardName = styled.div`
    font-size: 16px;
    font-weight: 500;

    margin: 30px 12px ;
`;
export const Front = styled.div`
    border-radius: 10px;
    background-color: #222632;
    position: relative;
    z-index: 1;
    transition: 500ms ease-in-out transform;
    transform: translateY(50px);
    width: 100%;
    @media (max-width: 768px){
        transform: translateY(0);
    }
`
export const Back = styled.div`

    transition: 500ms ease-in-out transform 300ms;
    transform: translateY(-80px);
    width: 100%;
    @media (max-width: 768px){
        transform: translateY(0);
    }
`