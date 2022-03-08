import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import ListTarea from "./ListTarea";
import Alert from "react-bootstrap/Alert";
import "./Tareas/index.css";

const FormTarea = () => {
    const [tareas, setTareas] = useState([]);
    const [tarea, setTarea] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (tarea.trim() === "") {
            setError(true);
            return;
        }
        setError(false);

        let arreglo = tareas;
        arreglo.push(tarea)
        setTareas(arreglo);
        setTarea("");
    }

    const borrarTarea = (name) => {
        let arregloFiltrado = tareas.filter((el) => el !== name)
        setTareas(arregloFiltrado)
    }

    return (
        <Container>
            <div>
                <form className=' form-tareas' onSubmit={handleSubmit}>
                    {error ? <Alert variant="danger">
                        Todos los campos son obligatorios
                    </Alert> : null}
                    <div className='form-group d-flex mt-3'>
                        <input className='form-control'
                            type="text"
                            placeholder="tarea 1"
                            onChange={(e) => { setTarea(e.target.value) }}
                            value={tarea}>
                        </input>
                        <button className='btn btn-outline-success'>Agregar</button>
                    </div>
                </form>
            </div>
            <div className='mt-3'>
                <ListTarea tareas={tareas} borrarTarea={borrarTarea} />
            </div>
        </Container>
    );
};

export default FormTarea;