import { heroes } from "../data/heroes"

//funcion para poder retornar los datos segun el heroe ("id" ingresado)
export const getHeroById = (id) =>{
  //se retornara el objeto que cumpla ese id ,puede regresar undefined si es que el id no corresponde a ninguno de los heroes
  return heroes.find( hero => hero.id == id);
}