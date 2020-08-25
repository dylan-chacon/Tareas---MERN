import React, { useContext } from 'react';
import TaskContext from '../../context/tasks/taskContext';
import projectContext from '../../context/proyectos/projectContext';

const Task = ({task}) => {
    //context
    const projectsContext = useContext(projectContext);
    const { project } = projectsContext;
    const tasksContext = useContext(TaskContext);
    const { deleteTask, getTasks, editTask, selectTask } = tasksContext;
    //extraer
    const [actualProject] = project;
    //eliminar tarea
    const deleteT = ID => {
        deleteTask(ID, actualProject._id);
        getTasks(actualProject._id);
    }
    //cambiar estado de tarea
    const changeState = async (task, status) => {
        task.state = status;
        await editTask(task);
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
                            onClick={() => changeState(task, false)}
                        >Completo</button>
                    ) : 
                    (
                        <button
                            type="button"
                            className="incompleto"
                            onClick={() => changeState(task, true)}
                        >Incompleto</button>
                    )
                }
            </div>

            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-ptimario"
                    onClick={() => selectTask(task)}
                >Editar</button>
                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => deleteT(task._id)}
                >Eliminar</button>
            </div>
        </li>
    );
}
 
export default Task;