import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../Hooks/useForm"
import queryString from "query-string";
import { HeroCard } from "../components"
import { getHeroesByName } from "../helpers";
export const Search = () => {
  const navigate = useNavigate()
  const location = useLocation();

  const query = queryString.parse(location.search) 
  const { q = '' } = query
  const heroes = getHeroesByName(q)
  //esto con validaciones para mostrar la barra de mensajes
   const showSearch = (q.length=== 0) ;
   //si se escribio algo y el array esta vacio
   const showError = (q.length > 0 && heroes.length === 0 )
  //usamos el customHook useForm
  const { searchText , onInputChange }=useForm({
    searchText : q
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    //validaciones
    if ( searchText.trim().length < 2) return ;
    navigate(`?q=${searchText}`);
  }
  return (
    <>
    <h1>Busca a tu heroe</h1>
    <hr />
    <div className="row">
      {/* 1ra columna */}
      <div className="col-5">
        <h4>Escribe el nombre de un heroe</h4>
        <hr />
        <form onSubmit={ onSearchSubmit }>
          <input 
          type="text"
          placeholder="Buscar un heroe"
          className="form-control"
          name="searchText"
          autoComplete="off" 
          value={searchText} //para inicial al renderizar el componente
          onChange={onInputChange}
          />
          <button className="btn btn-outline-primary mt-2">
            Buscar
          </button>
        </form>
      </div>
      {/* 2 da columna:para el resultado de la busqueda */}
      <div className="col-7">
        <h4>Resultado</h4>
        <hr />
        <div 
        className="alert alert-primary animate__animated animate__fadeIn"
        style={{display: showSearch ? '' : 'none'}} 
        >
          Buscar un heroe
        </div>
        <div className="alert alert-danger animate__animated animate__fadeIn"
        style={{ display : showError ? '':'none'}}
        >
          Heroe no encontrado <b>{q}</b>
        </div>
        <div>
          {/* el array puede traer mas de un heroe */}
          {
            heroes.map( hero =>(
               <HeroCard key={hero.id} {...hero}/>
              ))
          }
        </div>
      </div>
    </div>
    </>
  )
}
