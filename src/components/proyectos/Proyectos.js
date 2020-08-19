import React, { useContext, useEffect } from 'react';
import Sidebar from '../layout/Sidebar';
import Header from '../layout/Header';
import TaskForm from '../tareas/TaskForm';
import TaskList from '../tareas/TaskList';
import authContext from '../../context/auth/authContext';

const Proyectos = () => {
    //context
    const AuthContext = useContext(authContext);
    const { userAuth } = AuthContext;
    //useeffect   
    useEffect(() => {
        userAuth();
    }, []);
    
    return (
        <div className="contenedor-app">
            <Sidebar />
            <div className="seccion-principal">
                <Header />
                <main>
                    <TaskForm />
                    <div className="contenedor-tareas">
                        <TaskList />
                    </div>
                </main>
            </div>
        </div>
    );
}
 
export default Proyectos;