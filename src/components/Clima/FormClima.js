import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { consultarApi } from '../../servicios/ClimaApi';

const Clima = (props) => {
    const [busqueda, setBusqueda] = useState({
        ciudad: "",
        pais: ""
    });
    const [error, setError] = useState(false);
    const paises = [{ value: "", name: "Seleccione un País" }, { value: "AR", name: "Argentina" }, { value: "BR", name: "Brasil" }, { value: "UR", name: "Uruguay" }];

    const handleChange = (e) => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (busqueda.ciudad.trim() === "" || busqueda.pais.trim() === "") {
            setError(true);
            return;
        }
        setError(false);
        const result = await consultarApi(busqueda.pais, busqueda.ciudad);

        if (result.cod === "404") {
            setError(true);
            props.setResultado({});
        } else {
            setError(false);
            props.setResultado(result);
        }
    };


    return (
            <>
                <Form onSubmit={handleSubmit}>
                    {error ? <Alert variant="danger">
                        Todos los campos son obligatorios
                    </Alert> : null}
                    <Form.Group className="mb-3">
                        <Form.Select onChange={handleChange} name="pais" value={busqueda.pais}>
                            {paises.map((pais, index) => {
                                const { value, name } = pais;
                                return <option key={index} value={value}>{name}</option>
                            })}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex">
                        <Form.Control placeholder="Escriba una ciudad" type="text"
                            onChange={handleChange} name="ciudad" value={busqueda.ciudad} />
                        <Button variant="primary" type="submit" className='mx-auto'
                        >Buscar</Button>
                    </Form.Group>
                </Form>
            </>
    );
};

export default Clima;