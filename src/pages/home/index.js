import React, { useState, useRef } from "react" //importando o react e os react hooks

import Axios from 'axios'
import People from '../../assets/people.svg'
import Arrow from '../../assets/arrow.svg'

import { Container,
        Image,
        ContainerItens,
        H1,
        InputLabel,
        Input,
        Button,
} from "./styles.js"

//JSX
function App() {
    const [ users, setUsers] = useState([])
    const inputName = useRef()
    const inputAge = useRef()
    // criando um estado no react
    //ESTADO => VARIAVEL QUE QUANDO ATUALIZADA ATIVA UMA RENDELIZAÇÃO DE TELA
    // REACT HOOKS

     async function addNewUser() {
        const {data: NewUser} = await Axios.post("http://localhost:3001/users",//usando a desestruturação, pegando o DATA que veio da response e renomeando de NewUser
        { name: inputName.current.value, age: inputAge.current.value })
    
        setUsers([ ...users, NewUser ]) //utilizando spread operator
    }

    return (
    <Container>
        <Image alt="logo-image" src={People}/>

        <ContainerItens>
            <H1>Olá!</H1>

            <InputLabel>Nome</InputLabel>
            <Input ref={inputName} placeholder="Nome"/>

            <InputLabel>Idade</InputLabel>
            <Input ref={inputAge} placeholder="Idade"/>

            <Button onClick={addNewUser} >
                Cadastrar <img alt="arrow" src={Arrow}/>
            </Button>
        </ContainerItens>
    </Container>
    );
}

export default App