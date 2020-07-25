import React from 'react';

const Project = ({project}) => {
    //extraer
    const { name, } = project
    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
            >{name}</button>
        </li>
    );
}
 
export default Project;