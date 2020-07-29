import React, { useContext, useEffect } from 'react';
import Project from './Project'
import projectContext from '../../context/proyectos/projectContext';

const List = () => {
    //context
    const projectsContext = useContext(projectContext);
    const { projects, getProjects } = projectsContext;
    //useEffect
    useEffect(() => {
        getProjects();
    }, []);
    //Revisar contenido
    if (projects.length === 0) return <p>No hay poryectos, comienza creando uno</p>;

    return (
        <ul className="listado-proyectos">
            {projects.map(project => (
                <Project
                    key={project.id}
                    project={project}
                />
            ))}
        </ul>
    );
}
 
export default List;