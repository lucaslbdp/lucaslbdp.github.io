import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./common.css";

const Footer = () => {
    return (
        <footer>
            <div className='redes-footer'>
                <h3>¡Hablemos!</h3>
                <a target="_blank noreferrer" href="https://www.linkedin.com/in/lucas-alfredo-barrionuevo-8b92861b0/"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a target="_blank noreferrer" href="https://api.whatsapp.com/send?phone=543816851705"><FontAwesomeIcon icon={faWhatsapp} /></a>
            </div>
        </footer >
    );
};

export default Footer;