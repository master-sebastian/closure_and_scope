/*
* La variable es inicializada con var se vuelve global en este ambito y de esta forma
*/
var message = "Este es un mensaje desde el ambito global"

/**
 * Al utilizar el const no se puede sobreescribir el valor de esta variable con otro valor
 * @param String valueMessage
 * @return Object regresa un objeto con unas propiedades especificas 
 */
const messageFunction = (valueMessage="") => {
    /*
     * Ambito lexico ya que es inicializada dentro de una funcion no 
     * interfire el inicializado de forma global
     */
    var message = valueMessage
    /**
     * Nos permite la palabra var nos dejara inicializar las variables sin problema 
     */
    var message = "var: "+message

    /**
     * La palabra let no deja inicializar dos veces en el mismo ambito pero deja que el valor 
     * de la variable sea reasignable sin problema 
     */
    let mgs = "let: "
    mgs += message
    return { 
        "getMessageTypeWithVar": message,
        "getMessageTypeWithLet": mgs,
    }
}

const mgs = "Este es un mensaje desde el ambito lexico"
console.log(messageFunction(mgs).getMessageTypeWithVar)
console.log(messageFunction(mgs).getMessageTypeWithLet)
console.log(message)
