import { heroes } from "../data/heroes"

//Funcion que nos permite verificar si cumple que el publisher sea solo de DC o de Marvel  
export const getHeroesByPublisher = (publisher) =>{
  //vamos a validar que los heroes sean solo de DC o de Marvel
  const validPublishers = ['DC Comics','Marvel Comics']

  if(!validPublishers.includes(publisher)){
    throw new Error(`${publisher} not is a valid publisher`);
  }
  
  return heroes.filter(heroe => heroe.publisher === publisher)
}