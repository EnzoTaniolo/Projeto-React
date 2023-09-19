import React, { useState, useRef } from "react" //importando o react e os react hooks

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
    const [ users, setUsers] = useState([])
    const inputName = useRef()
    const inputAge = useRef()
    // criando um estado no react
    //ESTADO => VARIAVEL QUE QUANDO ATUALIZADA ATIVA UMA RENDELIZAÇÃO DE TELA
    // REACT HOOKS

    function addNewUser() {
        setUsers([ ...users, {id: Math.random(), name: inputName.current.value, age: inputAge.current.value}]) //utilizando spread operator
    }

    function deleteUser(userId) {
        const newUsers = users.filter(user => user.id !== userId)
        setUsers(newUsers)
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

            <ul>
                {users.map((user) => (
                    <User key={user.id} >
                        <p>{user.name}</p> <p>{user.age}</p>
                        <button onClick={() => deleteUser(user.id)}> <img alt="Trash-can-logo" src={Trash}/></button>
                    </User>
                ))}
            </ul>
        </ContainerItens>
    </Container>
    );
}

export default App