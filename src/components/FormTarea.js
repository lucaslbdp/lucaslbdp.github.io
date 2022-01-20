import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import ListTarea from "./ListTarea";
import "./components.css";

const FormTarea = () => {
    const [tareas, setTareas] = useState([]);
    const [tarea, setTarea] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

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
            <div className='mt-5'>
                <h3>Agregar tareas</h3>
            </div>
            <div className='div-tareas'>
                <form className='w-75 form-tareas' onSubmit={handleSubmit}>
                    <div className='form-group d-flex'>
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