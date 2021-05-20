/**
 * Procurar usar la palabra let para tener control los ambitos que necesitan su funciones
 */
const getNumersPow_2_x = (limitNumber) => {
    for (let number = 1; number <= limitNumber; number++) {
        setTimeout(
            ()=>{
               let numberPow2 = Math.pow(2, number)
                console.log(numberPow2)
        },1000)
    
    }
}

getNumersPow_2_x(5)