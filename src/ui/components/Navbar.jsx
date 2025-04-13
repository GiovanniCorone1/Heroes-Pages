import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';

export const Navbar = () => {
    const {user,logout}=useContext(AuthContext)
    const navigate = useNavigate()
    const onLogout = () =>{
        logout() 
        navigate("/login",{
            replace:true 
        });
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Heroes
            </Link>
            <div className="navbar-collapse">
                <div className="navbar-nav d-flex align-items-center">
                    <NavLink 
                        className={({isActive})=>`nav-item nav-link ${isActive ? "active" :""}`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={({isActive})=>`nav-item nav-link ${isActive ? "active" : ""}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink
                        className={({isActive})=>`nav-item nav-link ${isActive ? "active":""}`}
                        to="/search"
                    >
                        <div className="d-flex align-items-center">
                            <i className="fas fa-search"></i>
                            <span className="ms-1">Buscar</span>
                        </div>
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>
                        {user?.name}
                    </span>
                    <button 
                    className='nav-item nav-link btn'
                    onClick={onLogout}
                    >
                        Cerrar Sesión
                    </button>
                </ul>
            </div>
        </nav>
    )
}
