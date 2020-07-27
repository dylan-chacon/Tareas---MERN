import React, { Fragment, useState, useContext } from 'react';
import projectContext from '../../context/proyectos/projectContext';

const NewProject = () => {
    //context
    const projectsContext = useContext(projectContext);
    const { form, showForm } = projectsContext;
    //state
    const [project, setProject] = useState({
        name: ''
    });
    const { name } = project;
    //input
    const onChangeProject = e => {
        setProject({
            ...project,
            [e.target.name]: e.target.value
        });
    }
    //Submit
    const onSubmitProject = e => {
        e.preventDefault();
    }
    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={() => showForm()}
            >Nuevo Proyecto</button>
            { form &&
                (
                    <form
                        className="formulario-nuevo-proyecto"
                        onSubmit={onSubmitProject}
                    >
                        <input
                            type="text"
                            className="input-text"
                            placeholder="Nombre del proyecto"
                            name="name"
                            value={name}
                            onChange={onChangeProject}
                        />
                        <button
                            type="submit"
                            className="btn btn-block btn-primario"
                        >Agregar Proyecto</button>
                    </form>
                ) 
            }
        </Fragment>
    );
}
 
export default NewProject;