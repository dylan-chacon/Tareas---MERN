import React, { useContext, useEffect } from 'react';
import Project from './Project'
import projectContext from '../../context/proyectos/projectContext';
import alertContext from '../../context/alert/alertContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const List = () => {
    //context
    const projectsContext = useContext(projectContext);
    const { projects, message, getProjects } = projectsContext;
    const AlertaContext = useContext(alertContext);
    const { alert, showAlert } = AlertaContext;
    //useEffect
    useEffect(() => {
        //error
        if(message) showAlert(message.msg, message.category)
        //obtener poryectos
        getProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [message]);
    //Revisar contenido
    if (projects.length === 0) return <p>No hay proyectos, comienza creando uno</p>;

    return (
        <ul className="listado-proyectos">
            {alert && (<div className={`alerta ${alert.category}`}>{alert.msg}</div>)}
            <TransitionGroup>
                {projects.map(project => (
                    <CSSTransition
                        key={project._id}
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