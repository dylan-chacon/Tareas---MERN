import React, { useContext, useEffect } from 'react';
import authContext from '../../context/auth/authContext';

const Header = () => {
    //context
    const AuthContext = useContext(authContext);
    const { userAuth, user, logout } = AuthContext;
    //useeffect   
    useEffect(() => {
        userAuth();
    }, []);
    return (
        <header className="app-header">
            {user && 
            <p className="nombre-usuario">
                Hola <span>{user.name}</span>
            </p>
            }
            <nav className="nav-principal">
                <button
                    className="btn btn-blank cerrar-sesion"
                    onClick={() => logout()}
                >Cerrar sesión</button>
            </nav>
        </header>
    );
}
 
export default Header;