import React, { useState } from 'react';
import FormClima from "./FormClima";
import CardClima from "./CardClima";
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import "./components.css";

const AppClima = (props) => {
    const [resultado, setResultado] = useState({});

    return (

        <Container>
            <div className='clima-icon'>
                <FontAwesomeIcon icon={faCloudSun} onClick={props.mostrar} />
            </div>
            <div id='img-ocultar'>
                <div>
                    <CardClima resultado={resultado}></CardClima>
                </div>
                <div className='col-sm-12 col-md-6'>
                    <FormClima setResultado={setResultado} />
                </div>
                <button id='boton' onClick={props.ocultar} className='btn btn-outline-primary mt-4'>Ocultar</button>
            </div>
        </Container>
    );
};

export default AppClima;