import React from 'react';
import NewProject from '../proyectos/NewProject';
import List from '../proyectos/List';

const Sidebar = () => {
    return (
        <aside>
            <h1>MERN<span>Tasks</span></h1>
            <NewProject />
            <div className="proyectos">
                <h2>Tus Proyectos</h2>
                <List />
            </div>
        </aside>
    );
}
 
export default Sidebar;