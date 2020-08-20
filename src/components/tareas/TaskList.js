import React, { Fragment, useContext } from 'react';
import Task from './Task';
import projectContext from '../../context/proyectos/projectContext';
import TaskContext from '../../context/tasks/taskContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
                    : 
                    <TransitionGroup>
                        {taskProject.map(tarea => (
                            <CSSTransition
                                key={tarea.id}
                                timeout={600}
                                classNames="tarea"
                            >
                                <Task
                                    task={tarea}
                                />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                }
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
                onClick={() => deleteProject(actualProject._id)}
            >Eliminar Proyecto &times;</button>
        </Fragment>
    );
}
 
export default TaskList;