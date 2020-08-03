import React, { useContext, useEffect } from 'react';
import Project from './Project'
import projectContext from '../../context/proyectos/projectContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const List = () => {
    //context
    const projectsContext = useContext(projectContext);
    const { projects, getProjects } = projectsContext;
    //useEffect
    useEffect(() => {
        getProjects();
    }, []);
    //Revisar contenido
    if (projects.length === 0) return <p>No hay proyectos, comienza creando uno</p>;

    return (
        <ul className="listado-proyectos">
            <TransitionGroup>
                {projects.map(project => (
                    <CSSTransition
                        key={project.id}
                        timeout={600}
                        classNames="proyecto"
                    >
                        <Project
                            project={project}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    );
}
 
export default List;