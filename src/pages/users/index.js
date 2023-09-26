import React, { useState, useEffect } from "react" //importando o react e os react hooks

import Axios from 'axios'
import Avatar from '../../assets/avatars.svg'
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'

import { Container,
        Image,
        ContainerItens,
        H1,
        Button,
        User
    } from "./styles.js"

//JSX
function Users() {
    const [ users, setUsers] = useState([])
    // criando um estado no react
    //ESTADO => VARIAVEL QUE QUANDO ATUALIZADA ATIVA UMA RENDELIZAÇÃO DE TELA
    // REACT HOOKS

    useEffect(()=>{
        async function fetchUsers(){
            const {data: NewUsers} = await Axios.get("http://localhost:3001/users")
            setUsers(NewUsers)
        }

        fetchUsers()

    }, [])
    //o useeffect é chamado: quando inicia a aplicação, e 
    // quando um estado que está no array de dependencias dele é chamado



    async function deleteUser(userId) {
        await Axios.delete(`http://localhost:3001/users/${userId}`)
        
        const newUsers = users.filter(user => user.id !== userId)
        setUsers(newUsers)
    }

    return (
    <Container>
        <Image alt="logo-image" src={Avatar}/>

        <ContainerItens>
            <H1>Usuários!</H1>

            <ul>
                {users.map((user) => (
                    <User key={user.id} >
                        <p>{user.name}</p> <p>{user.age}</p>
                        <button onClick={() => deleteUser(user.id)}> <img alt="Trash-can-logo" src={Trash}/></button>
                    </User>
                ))}
            </ul>

            <Button>
                <img alt="arrow" src={Arrow}/> Voltar
            </Button>

        </ContainerItens>
    </Container>
    );
}

export default Users