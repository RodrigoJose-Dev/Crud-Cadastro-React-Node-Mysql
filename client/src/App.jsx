import { useState } from "react";

import "./App.css";

function App() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [country, setCountry] = useState("");
    const [position, setPosition] = useState("");
    const [wage, setWage] = useState(0);

    const displayInfo = () => {
        console.log(name + age + country + position + wage);
    };

    return (
        <div className="App">
            <div className="form">
                <label>Nome:</label>
                <input
                    type="text"
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                />
                <label>Idade:</label>
                <input
                    type="number"
                    onChange={(event) => {
                        setAge(event.target.value);
                    }}
                />
                <label>Estado:</label>
                <input
                    type="text"
                    onChange={(event) => {
                        setCountry(event.target.value);
                    }}
                />
                <label>Cargo:</label>
                <input
                    type="text"
                    onChange={(event) => {
                        setPosition(event.target.value);
                    }}
                />
                <label>Salário:</label>
                <input
                    type="number"
                    onChange={(event) => {
                        setWage(event.target.value);
                    }}
                />
                <button onClick={displayInfo}>Cadastrar</button>
            </div>
        </div>
    );
}

export default App;
