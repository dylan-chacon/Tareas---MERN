import React, { Fragment } from 'react';
import Task from './Task';

const TaskList = () => {

    const tasks = [
        { name: 'abdnnd', state: true },
        { name: 'abdnnd', state: false },
    ]
    return (
        <Fragment>
            <h2>Proyecto: abc</h2>

            <ul className="listado-tareas">
                {tasks.length === 0 ?
                    (<li className="tarea">
                        <p>No hay tareas</p>
                    </li>)
                    : tasks.map(tarea => (
                        <Task task={tarea} />
                    ))
                }
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
            >Eliminar Proyecto &times;</button>
        </Fragment>
    );
}
 
export default TaskList;