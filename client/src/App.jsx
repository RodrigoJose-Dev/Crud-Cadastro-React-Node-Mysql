import { useState } from "react";

import Axios from "axios";

import "./App.css";

function App() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [country, setCountry] = useState("");
    const [position, setPosition] = useState("");
    const [wage, setWage] = useState(0);

    const [employeeList, setEmployeeList] = useState([]);

    //envia as informações para o back end
    const addEmployee = () => {
        Axios.post("http://localhost:3000/create", {
            name: name,
            age: age,
            country: country,
            position: position,
            wage: wage,
        }).then(() => {
            setEmployeeList([
                ...employeeList,
                {
                    name: name,
                    age: age,
                    country: country,
                    position: position,
                    wage: wage,
                },
            ]);
        });
    };

    //puxa do back end os dados para o front end
    const getEmployees = () => {
        Axios.get("http://localhost:3000/employees").then((response) => {
            setEmployeeList(response.data);
        });
    };

    return (
        <div className="App">
            <div className="form">
                <h2>Cadastro de Funcionários</h2>
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
                <label>País:</label>
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
                <button onClick={addEmployee}>Cadastrar</button>
            </div>
            <hr style={{ width: 1000 }} />
            <div className="employees">
                <h2>Lista de Funcionários</h2>
                <button onClick={getEmployees}>Atualizar Lista</button>

                {employeeList.map((value, key) => {
                    return (
                        <div className="employee-values">
                            <h3 className="employee-item">
                                Nome: {value.name}
                            </h3>
                            <h3 className="employee-item">
                                Idade: {value.age}
                            </h3>
                            <h3 className="employee-item">
                                País: {value.country}
                            </h3>
                            <h3 className="employee-item">
                                Cargo: {value.position}
                            </h3>
                            <h3 className="employee-item">
                                Salário: {value.wage}
                            </h3>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default App;
