import React, { useContext } from 'react';
import TaskContext from '../../context/tasks/taskContext';
import projectContext from '../../context/proyectos/projectContext';

const Task = ({task}) => {
    //context
    const projectsContext = useContext(projectContext);
    const { project } = projectsContext;
    const tasksContext = useContext(TaskContext);
    const { deleteTask, getTasks } = tasksContext;
    //extraer
    const [actualProject] = project;
    //eliminar tarea
    const deleteT = ID => {
        deleteTask(ID);
        getTasks(actualProject.id);
    }
    return (
        <li className="tarea sombra">
            <p>{task.name}</p>

            <div className="estado">
                {task.state ?
                    (
                        <button
                            type="button"
                            className="completo"
                        >Completo</button>
                    ) : 
                    (
                        <button
                            type="button"
                            className="incompleto"
                        >Incompleto</button>
                    )
                }
            </div>

            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-ptimario"
                >Editar</button>
                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => deleteT(task.id)}
                >Eliminar</button>
            </div>
        </li>
    );
}
 
export default Task;