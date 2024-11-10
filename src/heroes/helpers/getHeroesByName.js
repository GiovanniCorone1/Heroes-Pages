import { heroes } from "../data/heroes";

//funcion para obtener la informacion de un heroe por el nombre ingresado
 export const getHeroesByName = (name='') => {
  //lo que mandemos le quitamos el espacio y lo convertimos en minuscula
  name = name.toLocaleLowerCase().trim();
  //si no enviamos nada retornamos un arreglo vacio
  if (name.length === 0 ) return [];
  return heroes.filter( hero => hero.superhero.toLocaleLowerCase().includes(name))
 }