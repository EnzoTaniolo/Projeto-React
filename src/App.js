import React from "react"
import "./styles.css"

//JSX
function App() {
    return (
    <div className="container">
        <img src="" alt="" />

        <div>
            <h1>Olá!</h1>

            <label htmlFor="">Nome</label>
            <input type="text" placeholder="Nome"/>

            <label htmlFor="">Idade</label>
            <input type="number" placeholder="Idade"/>

            <button>Cadastrar</button>
        </div>
    </div>
    );
}

export default App