/**
 * Antes de ser interpretado por el motor de javscript 
 * El motor lo ajusta y lo adapta  segun sea el caso
 * En las funciones se llaman algunas veces y despues se declaran
 * Js solo usa el hoisting en declaraciones y no en inicializaciones
 */

let flag = true

if(flag){
    message = "Mensaje por defecto" //aplica el hoistings
    var message //inicializa la variable
    console.log(message)
}else{
    console.log(message)//undefined
    var a = "sobre escribiendo la variable"
}

getMessage('No parar de aprender!')
function getMessage(message){
    console.log("Message: "+message)
}
    


