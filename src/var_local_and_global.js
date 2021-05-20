/*
* La variable es inicializada con var se vuelve global en este ambito y de esta forma
*/
var message = "Este es un mensaje desde el ambito global"

/**
 * Al utilizar el const no se puede sobreescribir el valor de esta variable con otro valor
 * @param String valueMessage
 * @return String message 
 */
const getMessage = (valueMessage="") => {
    /*
     * Ambito lexico ya que es inicializada dentro de una funcion no 
     * interfire el inicializado de forma global
     */
    return message
}

console.log(getMessage("Este es un mensaje desde el ambito lexico"))
console.log(message)
