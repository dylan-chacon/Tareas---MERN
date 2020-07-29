import React, { useContext } from 'react';
import projectContext from '../../context/proyectos/projectContext';

const Project = ({project}) => {
    //context
    const projectsContext = useContext(projectContext);
    const { projectSelected } = projectsContext;
    //extraer
    const { name, id } = project
    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => projectSelected(id)}
            >{name}</button>
        </li>
    );
}
 
export default Project;