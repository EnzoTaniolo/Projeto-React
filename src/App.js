import React from "react"

import People from './assets/people.svg'
import Arrow from './assets/arrow.svg'
import Trash from './assets/trash.svg'

import { Container,
        Image,
        ContainerItens,
        H1,
        InputLabel,
        Input,
        Button,
        User
    } from "./styles.js"

//JSX
function App() {
    const users = [
    {id: Math.random(), name: "Enzo", age: 18},
    {id: Math.random(), name: "Lucca", age: 14}  
]

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

            <ul>
                {users.map((user) => (
                    <User key={user.id} >
                        <p>{user.name}</p> <p>{user.age} Anos</p>
                        <button> <img alt="Trash-can-logo" src={Trash}/></button>
                    </User>
                ))}
            </ul>
        </ContainerItens>
    </Container>
    );
}

export default App