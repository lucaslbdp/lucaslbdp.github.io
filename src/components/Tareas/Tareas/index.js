import React, { useState } from 'react';
import FormTarea from '../FormTarea';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import "./index.css";

const AppTareas = () => {
    const [hidden, setHidden] = useState("hidden");

    return (
        <Container>
            <div className='clima-icon'>
                <FontAwesomeIcon icon={faList} onClick={() => setHidden("show")} />
            </div>
            <div className={`${hidden}`}>
                <FormTarea />
                <button id='boton' onClick={() => setHidden("hidden")} className='btn btn-outline-primary'>Ocultar</button>
            </div>
        </Container>
    );
};

export default AppTareas;