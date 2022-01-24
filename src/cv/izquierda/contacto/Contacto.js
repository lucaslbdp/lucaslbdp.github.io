import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope,  faMapMarkerAlt,  faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./contacto.css";

const Contacto = () => {
    return (
        <div className='contacto-info'>
            <h5 className='titulo'>Contacto</h5>
            <ul className='ul-contacto'>
                <li><FontAwesomeIcon icon={faPhone} className='icon' />0381 685 1705</li>
                <li><FontAwesomeIcon icon={faEnvelope} className='icon'/>lucasabarrionuevo1@gmail.com</li>
                <li><FontAwesomeIcon icon={faMapMarkerAlt} className='icon'/>Tucumán, Argentina</li>
                <li><FontAwesomeIcon icon={faLinkedin} className='icon'/>www.linkedin.com/in/lucas-alfredo-barrionuevo-8b92861b0/</li>
            </ul>
        </div>
    );
};

export default Contacto;