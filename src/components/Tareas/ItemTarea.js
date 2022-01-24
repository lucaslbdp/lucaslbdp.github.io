import React from 'react';

const ItemTarea = (props) => {


    return (
        <li className='list-group-item d-flex justify-content-between'>{props.valor}
            <button className='btn btn-outline-danger' onClick={() => props.borrarTarea(props.valor)}>x</button>
        </li>
    );
};

export default ItemTarea;