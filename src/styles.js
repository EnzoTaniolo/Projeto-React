import styled from "styled-components"
import Background from "./assets/background.svg"

export const Container = styled.div `
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100vh;
`;

export const Image = styled.img `
    width: 300px;
    height: 300px;
`;

export const ContainerItens = styled.div `
    background: linear-gradient(
        157.44deg,
        rgba(255, 255, 255, 0.6) 0.84%,
        rgba(255, 255, 255, 0.6) 0.85%,
        rgba(255, 255, 255, 0.15) 100%
    );
    border-radius: 61px 61px 0px 0px;
    display: flex;
    flex-direction: column;
    padding : 50px;
    height: 100vh;

`;

export const H1 = styled.h1 `
    font-size: 34px;
    font-weight: 700;
    line-height: 40px;
    text-align: center;
    color: white;
    margin-bottom: 80px;
    `;

export const InputLabel = styled.p `
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.4px;
    color: #EEEEEE;
    margin-left: 25px;
`;

export const Input = styled.input `
    box-shadow: 0px 4px 4px 0px #00000040;
    border-radius: 14px;
    width: 342px;
    height: 58px;
    background: #FFFFFF40;
    outline: none;
    border: none;
    padding-left: 25px;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0px;
    color: #fff;
    margin-bottom: 34px;
`;

export const Button = styled.button `
    background: #000000CC;
    outline: none;
    border: none;
    width: 342px;
    height: 74px;
    border-radius: 14px;
    font-family: Roboto;
    font-size: 17px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0px;
    color: #FFFFFF;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    box-shadow: 0px 4px 4px 0px #00000040;
    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.5;
    }
`;
