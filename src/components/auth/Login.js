import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    //state
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const { email, password } = user;
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
                <h1>Iniciar Sesión</h1>

                <form
                    onSubmit={onSubmit}
                >
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
                        <button
                            type="submit"
                            className="btn btn-primario btn-block"
                        >Iniciar Sesión</button>
                    </div>
                </form>
                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Obtener Cuenta
                </Link>
            </div> 
        </div>
    );
}
 
export default Login;