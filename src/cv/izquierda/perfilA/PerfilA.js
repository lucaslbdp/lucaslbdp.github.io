import React from 'react';
import yo from "../../../img/yo.jpg";
import "./perfilA.css";

const PerfilA = () => {
    return (
        <div className='perfilA'>
            <div className='imgBox'>
                <img src={yo} alt="yo" id='imgBox'/>
            </div>
            <h2>Lucas Barrionuevo</h2>
        </div>
    );
};

export default PerfilA;