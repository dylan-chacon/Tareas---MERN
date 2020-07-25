import React from 'react';
import Sidebar from '../layout/Sidebar';
import Header from '../layout/Header';

const Proyectos = () => {
    return (
        <div className="contenedor-app">
            <Sidebar />
            <div className="seccion-principal">
                <Header />
                <main>
                    <div className="contenedor-tareas">

                    </div>
                </main>
            </div>
        </div>
    );
}
 
export default Proyectos;