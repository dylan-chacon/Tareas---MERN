import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {
    //state
    const [user, setUser] = useState({
        email: '',
        password: '',
        name: '',
        confirm: ''
    });
    const { email, password, name, confirm } = user;
    //funciones
    const onChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }
    const onSubmit = e => {
        e.preventDefault()
    }
    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Obtener una cuenta</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            placeholder="Nombre"
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Correo electrónico"
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="Contraseña"
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirm">Confirmar contraseña</label>
                        <input
                            type="password"
                            id="confirm"
                            name="confirm"
                            value={confirm}
                            placeholder="Confirmar contraseña"
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <button
                            type="submit"
                            className="btn btn-primario btn-block"
                        >Registrar</button>
                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">
                    Volver a Iniciar Sesión
                </Link>
            </div> 
        </div>
    );
}
 
export default NuevaCuenta;