import React, { useState } from 'react';
import FormClima from "../FormClima";
import CardClima from "../CardClima";
import { Container, Modal } from 'react-bootstrap';
import clima from "../../../img/clima.jpg";
import "./index.css";

const AppClima = () => {
    const [resultado, setResultado] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <Container className='container-clima'>
            <h4>Consultá el clima</h4>
            <div className='clima-icon'>
                <img src={clima} alt="imagen clima" onClick={handleShow} className='imagen-clima' />
            </div>
            <Modal show={show} onHide={handleClose} backdrop="static"
                keyboard={false} className='modal-clima'>
                <div className='col-md-8 col-sm-12 modal-clima'>
                    <CardClima resultado={resultado} />
                    <FormClima setResultado={setResultado} />
                </div>
                <button onClick={handleClose} className='btn btn-outline-primary boton-modal'>Ocultar</button>
            </Modal>
        </Container>
    );
};

export default AppClima;