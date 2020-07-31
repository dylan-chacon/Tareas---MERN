import React, { Fragment, useContext } from 'react';
import Task from './Task';
import projectContext from '../../context/proyectos/projectContext';
import TaskContext from '../../context/tasks/taskContext';

const TaskList = () => {
    //context
    const projectsContext = useContext(projectContext);
    const { project, deleteProject } = projectsContext;
    const tasksContext = useContext(TaskContext);
    const { taskProject } = tasksContext;
    //sin proyecto seleccionado
    if (!project) return <h2>Selecciona un proyecto</h2>
    //proyecto actual
    const [actualProject] = project;
    //tareas
    return (
        <Fragment>
            <h2>Proyecto: {actualProject.name}</h2>

            <ul className="listado-tareas">
                {taskProject.length === 0 ?
                    (<li className="tarea">
                        <p>No hay tareas</p>
                    </li>)
                    : taskProject.map(tarea => (
                        <Task
                            task={tarea}
                            key={tarea.id}
                        />
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