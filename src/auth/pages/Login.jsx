import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

export const Login = () => {
  //usamos el contexto
  const {login}= useContext(AuthContext)
 
  const navigate=useNavigate();

  const onLogin = () => {
    const lastPath=localStorage.getItem('lastPath') || '/'
    login('Iniciaste Sesión');
    navigate(lastPath,{
      replace:true //al retroceder no regresa al login si ya ingreso
    })
  }

  return (
    <div className="container mt-5">
    <h1>Bienvenido a Heroes Pages</h1>
    <hr /> 
    <button
    className="btn btn-primary"
    onClick={onLogin}
    >
      Ingresar
    </button>
    </div>
  )
}
