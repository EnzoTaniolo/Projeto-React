import React from "react"

import People from './assets/people.svg'
import Arrow from './assets/arrow.svg'

import { Container, Image, ContainerItens, H1, InputLabel, Input, Button } from "./styles.js"

//JSX
function App() {
    return (
    <Container>
        <Image alt="logo-image" src={People}/>

        <ContainerItens>
            <H1>Olá!</H1>

            <InputLabel>Nome</InputLabel>
            <Input type="text" placeholder="Nome"/>

            <InputLabel>Idade</InputLabel>
            <Input type="number" placeholder="Idade"/>

            <Button>Cadastrar <img alt="arrow" src={Arrow}/></Button>
        </ContainerItens>
    </Container>
    );
}

export default App