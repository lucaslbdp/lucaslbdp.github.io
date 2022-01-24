import React from 'react';

const CardClima = ({resultado}) => {
    let temp= "";

    if(resultado.main){
        temp = `${resultado.main.temp} °c`;
    }

    return (
        <div>
            <h2>Consultar clima</h2>
            <h3>{resultado.name}</h3>
            <p>{temp}</p>
        </div>
    );
};

export default CardClima;