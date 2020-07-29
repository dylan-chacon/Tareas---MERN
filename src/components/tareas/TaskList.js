import React, { Fragment, useContext } from 'react';
import Task from './Task';
import projectContext from '../../context/proyectos/projectContext';

const TaskList = () => {
    //context
    const projectsContext = useContext(projectContext);
    const { project, deleteProject } = projectsContext;
    //sin proyecto seleccionado
    if (!project) return <h2>Selecciona un proyecto</h2>
    //proyecto actual
    const [actualProject] = project;
    //tareas
    const tasks = [
        { name: 'abdnnd', state: true },
        { name: 'abdnnd', state: false },
    ]
    return (
        <Fragment>
            <h2>Proyecto: {actualProject.name}</h2>

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
                onClick={() => deleteProject(actualProject.id)}
            >Eliminar Proyecto &times;</button>
        </Fragment>
    );
}
 
export default TaskList;