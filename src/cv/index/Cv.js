import React from 'react';
import { Container } from 'react-bootstrap';
import Experiencia from '../derecha/experiencia/Experiencia';
import Perfil from '../derecha/perfil/Perfil';
import Skills from '../derecha/skills/Skills';
import Contacto from '../izquierda/contacto/Contacto';
import PerfilA from '../izquierda/perfilA/PerfilA';
import Educacion from '../izquierda/educacion/Educacion';
import Lenguajes from '../izquierda/lenguajes/Lenguajes';
import { Button } from "react-bootstrap";
import "./cv.css"

const Cv = () => {
    return (
        <Container className='container-cv mt-5'>
            <div className='col-lg-5 ladoA'>
                <PerfilA />
                <Contacto />
                <Educacion />
                <Lenguajes />
            </div>
            <div className='ladoB'>
                <Perfil />
                <Experiencia />
                <Skills />
                <Button variant="outline-info" href="/">Volver</Button>
            </div>
        </Container>
    );
};

export default Cv;