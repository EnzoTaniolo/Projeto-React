import styled from "styled-components"
import Background from "../../assets/background2.svg"

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
    backdrop-filter: blur(45px);

`;

export const H1 = styled.h1 `
    font-size: 34px;
    font-weight: 700;
    line-height: 40px;
    text-align: center;
    color: white;
    margin-bottom: 80px;
    `;


export const Button = styled.button `
    border: 1px solid #FFFFFF;
    margin-top: 120px;
    background: transparent;
    outline: none;
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
    
    img{
        transform: rotateY(180deg);
    }
`;

export const User = styled.li `
    display: flex;
    align-items: center;
    justify-content: space-around;

    box-shadow: 0px 4px 4px 0px #00000040;
    border-radius: 14px;
    background: #FFFFFF40;

    width: 342px;
    height: 58px;

    outline: none;
    border: none;

    margin-top: 25px;
    
    p{
        color: #fff;
        font-size: 24px;
        font-weight: 400;
        line-height: 28px;
        letter-spacing: 0px;
    }

    button{
        background: none;
        border: none;
        cursor: pointer;
    }
`;