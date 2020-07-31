import React, { useContext } from 'react';
import projectContext from '../../context/proyectos/projectContext';
import TaskContext from '../../context/tasks/taskContext';

const Project = ({project}) => {
    //context
    const projectsContext = useContext(projectContext);
    const { projectSelected } = projectsContext;
    const tasksContext = useContext(TaskContext);
    const { getTasks } = tasksContext;
    //extraer
    const { name, id } = project;
    //agregar proyecto actual
    const selectProject = ID => {
        projectSelected(ID); //proyecto actual
        getTasks(ID); //filtrar tareas
    }
    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => selectProject(id)}
            >{name}</button>
        </li>
    );
}
 
export default Project;