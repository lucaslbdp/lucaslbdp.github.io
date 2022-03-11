import React from 'react';
import opcion2 from "../../../img/opcion2.jpg";
import "./perfilA.css";

const PerfilA = () => {
    return (
        <div className='perfilA'>
            <div className='imgBox'>
                <img src={opcion2} alt="yo" id='imgBox'/>
            </div>
            <h2>Lucas Barrionuevo</h2>
        </div>
    );
};

export default PerfilA;