import React, { useState } from 'react';
import FormClima from "../FormClima";
import CardClima from "../CardClima";
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import "./index.css";

const AppClima = () => {
    const [resultado, setResultado] = useState({});
    const [hidden, setHidden] = useState("hidden");

    return (

        <Container>
            <div className='clima-icon'>
                <FontAwesomeIcon icon={faCloudSun} onClick={() => setHidden("show")} />
            </div>
            <div className={`${hidden}`}>
                <div>
                    <CardClima resultado={resultado} />
                </div>
                <div className='col-sm-12 col-md-6'>
                    <FormClima setResultado={setResultado} />
                </div>
                <button onClick={() => setHidden("hidden")} className='btn btn-outline-primary mt-4'>Ocultar</button>
            </div>
        </Container>
    );
};

export default AppClima;