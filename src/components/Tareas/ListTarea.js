import React from 'react';
import ItemTarea from './ItemTarea';

const ListTarea = (props) => {
    return (
        <ul className='list-group'>
            {props.tareas.map((el, index) =>
                <ItemTarea key={index} valor={el} borrarTarea={props.borrarTarea}/>
            )}
        </ul>
    );
};

export default ListTarea;