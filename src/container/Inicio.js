import React from 'react';
import AppTareas from '../components/Tareas/Tareas/AppTareas';
import AppClima from '../components/Clima/AppClima/AppClima';
import { CardGroup, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import "./inicio.css";

const Inicio = () => {

    return (
        <>
            <section>
                <div className='descripcion'>
                    <span className='loader'><h2>Lucas Barrionuevo</h2></span>
                    <h5>Un desarrollador frontend junior, buscando aprender más sobre la programación.</h5>
                    <h5>Vivo en Tucumán, Argentina</h5>
                    <div className='container-skills'>
                        <FontAwesomeIcon icon={faHtml5} className='skills' />
                        <FontAwesomeIcon icon={faCss3} className='skills' />
                        <FontAwesomeIcon icon={faJsSquare} className='skills' />
                        <FontAwesomeIcon icon={faReact} className='skills' />
                        <FontAwesomeIcon icon={faNodeJs} className='skills' />
                    </div>
                </div>

                <div >
                    <img src="https://via.placeholder.com/350" alt="placeholder"></img>
                </div>
            </section>

            <CardGroup className='apps'>
                <Card>
                    <AppClima />
                </Card>
                <Card>
                    <AppTareas />
                </Card>
            </CardGroup>
        </>
    );
};

export default Inicio;