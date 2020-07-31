import React, { useContext, useState } from 'react';
import projectContext from '../../context/proyectos/projectContext';
import TaskContext from '../../context/tasks/taskContext';

const TaskForm = () => {
    //context
    const projectsContext = useContext(projectContext);
    const { project } = projectsContext;
    const tasksContext = useContext(TaskContext);
    const { addTask, checkTask, taskError, getTasks } = tasksContext;
    //state
    const [task, setTask] = useState({
        name: ''
    })
    const { name } = task;
    //sin proyecto seleccionado
    if (!project) return null
    //leer inputs
    const handleChange = e => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }
    //proyecto actual
    const [actualProject] = project;
    //submit formulario
    const onSubmit = e => {
        e.preventDefault();
        //validar
        if (name.trim() === '') {
            checkTask();
            return
        }
        //agregar tarea
        task.projectId = actualProject.id;
        task.state = false;
        addTask(task);
        //actualizar state tareas proyecto actual
        getTasks(actualProject.id);
        //reiniciar formulario
        setTask({
            name: ''
        });
    }
    return (
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre de Tarea"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <button
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                    >Agregar Tarea</button>
                </div>
            </form>
            {taskError &&
                <p className="mensaje error">
                    El nombre de la tarea es obligatorio
                </p>
            }
        </div>
    );
}
 
export default TaskForm;