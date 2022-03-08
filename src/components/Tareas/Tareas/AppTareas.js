import React, { useState } from 'react';
import FormTarea from '../FormTarea';
import { Container, Modal } from 'react-bootstrap';
import tarea from "../../../img/tarea.jpg";
import "./index.css";

const AppTareas = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container className='container-tareas'>
            <h4>Tareas para hacer</h4>
            <div>
                <img src={tarea} onClick={handleShow} alt="tareas" className='imagen-tarea' />
            </div>
            <Modal show={show} onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className="modal-tarea">
                <FormTarea />
                <button id='boton' onClick={handleClose} className='btn btn-outline-primary boton-modal'>Ocultar</button>
            </Modal>
        </Container>
    );
};

export default AppTareas;