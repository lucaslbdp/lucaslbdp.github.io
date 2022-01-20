import React from 'react';
import FormTarea from './FormTarea';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

const AppTareas = (props) => {


    return (
        <Container>
            <div className='clima-icon'>
                <FontAwesomeIcon icon={faList} onClick={props.mostrar2} />
            </div>
            <div id='img-ocultar2'>
                <FormTarea />
                <button id='boton' onClick={props.ocultar2} className='btn btn-outline-primary'>Ocultar</button>
            </div>
        </Container>
    );
};

export default AppTareas;