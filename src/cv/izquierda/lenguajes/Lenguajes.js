import React from 'react';
import "./lenguajes.css";

const Lenguajes = () => {
    return (
        <div>
            <h5 className='titulo-educacion'>Lenguajes</h5>
            <ul>
                <li>
                    <span>Inglés</span>
                    <span className='porcentaje'>
                        <div style={{width:"70%"}}></div>
                    </span>
                </li>
                <li>
                    <span>Francés</span>
                    <span className='porcentaje'>
                        <div style={{width:"30%"}}></div>
                    </span>
                </li>

            </ul>
        </div>
    );
};

export default Lenguajes;