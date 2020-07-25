import React from 'react';

const TaskForm = () => {
    return (
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre de Tarea"
                        name="name"
                    />
                </div>
                <div className="contenedor-input">
                    <button
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                    >Agregar Tarea</button>
                </div>
            </form>
        </div>
    );
}
 
export default TaskForm;