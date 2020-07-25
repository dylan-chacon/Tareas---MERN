import React from 'react';
import Sidebar from '../layout/Sidebar';
import Header from '../layout/Header';
import TaskForm from '../tareas/TaskForm';

const Proyectos = () => {
    return (
        <div className="contenedor-app">
            <Sidebar />
            <div className="seccion-principal">
                <Header />
                <main>
                    <TaskForm />
                    <div className="contenedor-tareas">

                    </div>
                </main>
            </div>
        </div>
    );
}
 
export default Proyectos;