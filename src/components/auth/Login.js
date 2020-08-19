import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import alertContext from '../../context/alert/alertContext';
import authContext from '../../context/auth/authContext';

const Login = (props) => {
    //context
    const alertContext1 = useContext(alertContext);
    const { alert, showAlert } = alertContext1;
    const authContext1 = useContext(authContext);
    const { message, auth, login } = authContext1;
    //errores de login
    useEffect(() => {
        if (auth) {
            props.history.push('/proyectos')
        }
        if (message) {
            showAlert(message.msg, message.category)
        }
    }, [message, auth, props.history])
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
        e.preventDefault();
        //campos vacíos
        if (email.trim() === '' || password.trim() === '') {
            showAlert('Todos los campos son obligatorios', 'alerta-error');
            return
        }
        //action
        login({ email, password });
    }
    return (
        <div className="form-usuario">
            {alert && (
                <div className={`alerta ${alert.category}`}>
                    {alert.msg}
                </div>
            )}
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