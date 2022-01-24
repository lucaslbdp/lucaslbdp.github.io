import React from 'react';
import "./educacion.css";

const educacion = () => {
    return (
        <div>
            <h5 className='titulo-educacion'>Educación</h5>
            <ul>
                <li>
                    <h6 className='titulo-color'>2019 - 2020</h6>
                    <h6>Full stack Developer</h6>
                    <h6>Rolling Code School</h6>
                </li>
                <li className='mt-3'>
                    <h6 className='titulo-color'>2021 - Actualmente</h6>
                    <h6>Full stack Developer</h6>
                    <h6>Coder House</h6>
                </li>
            </ul>
        </div>
    );
};

export default educacion;