import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import alertContext from '../../context/alert/alertContext';

const NuevaCuenta = () => {
    //context
    const alertContext1 = useContext(alertContext);
    const { alert, showAlert } = alertContext1;
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
        //campos vacíos
        if (name.trim() === '' || email.trim() === ''
        || confirm.trim() === '' || password.trim() === '') {
            showAlert('Todos los campos son obligatorios', 'alerta-error');
            return
        }
        //password mínimo 6 caracteres
        if (password.length < 6) {
            showAlert('Contraseña debe ser mínimo de 6 caracteres', 'alerta-error');
            return
        }
        //password diferentes
        if (password !== confirm) {
            showAlert('Las contraseñas no son iguales', 'alerta-error');
            return
        }
    }
    return (
        <div className="form-usuario">
            {alert && (
                <div className={`alerta ${alert.category}`}>
                    {alert.msg}
                </div>
            )}
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