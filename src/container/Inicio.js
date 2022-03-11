import React from 'react';
import AppTareas from '../components/Tareas/Tareas/AppTareas';
import AppClima from '../components/Clima/AppClima/AppClima';
import opcion1 from "../img/opcion1.jpg"
import { CardGroup, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGithub, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
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
                        <FontAwesomeIcon icon={faGithub} className='skills' />
                    </div>
                </div>

                <div>
                    <img src={opcion1} alt="placeholder" className='img-inicio'></img>
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