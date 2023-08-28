import React from "react"

import { Container, Image, ContainerItens, H1, InputLabel, Input, Button } from "./styles.js"

//JSX
function App() {
    return (
    <Container>
        <Image src="" alt="" />

        <ContainerItens>
            <H1>Olá!</H1>

            <InputLabel>Nome</InputLabel>
            <Input type="text" placeholder="Nome"/>

            <InputLabel>Idade</InputLabel>
            <Input type="number" placeholder="Idade"/>

            <Button>Cadastrar</Button>
        </ContainerItens>
    </Container>
    );
}

export default App