import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const Clima = (props) => {
    const [busqueda, setBusqueda] = useState({
        ciudad: "",
        pais: ""
    });
    const [error, setError] = useState(false)

    const handleChange = (e) => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (busqueda.ciudad.trim() === "" || busqueda.pais.trim() === "") {
            setError(true);
            return;
        }
        setError(false);
        consultarApi();
    };

    const consultarApi = async () => {
        const apiKey = "bfdea21443991dbbb4fb30286ff536f8",
            url = `https://api.openweathermap.org/data/2.5/weather?q=${busqueda.ciudad},${busqueda.pais}&appid=${apiKey}`;

        const respuesta = await fetch(url),
            result = await respuesta.json();
        console.log(result);
        if (result.cod === "404") {
            setError(true);
            props.setResultado({});
        } else {
            setError(false);
            props.setResultado(result);
        }

    }


    return (
        <div className='container'>
            <>
                <Form onSubmit={handleSubmit}>
                    {error ? <Alert variant="danger">
                        Todos los campos son obligatorios
                    </Alert> : null}

                    <Form.Group className="mb-3">
                        <Form.Label>Ciudad</Form.Label>
                        <Form.Control placeholder="Escriba una ciudad" type="text"
                            onChange={handleChange} name="ciudad" value={busqueda.ciudad} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>País</Form.Label>
                        <Form.Select onChange={handleChange} name="pais" value={busqueda.pais}>
                            <option value="">Seleccione un país</option>
                            <option value="AR">Argentina</option>
                            <option value="BR">Brasil</option>
                            <option value="UR">Uruguay</option>
                        </Form.Select>
                    </Form.Group>
                    <Button variant="primary" type="submit"
                    >Buscar</Button>
                </Form>
            </>
        </div>
    );
};

export default Clima;