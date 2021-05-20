/**
 * Closure utiliza el ambito lexico en una subfuncion 
 * para darle persistencia a los valores variables 
 */
const moneyBox = (initAcum= 0) => {
    var acum = initAcum //Variable privada con closure
    const managerMoneyBox = (plusMoney=0) => {
        if(isNaN(plusMoney) || typeof plusMoney != "number"){
            return console.log(new Error("La cantidad a depositar tiene que ser un numero")) 
        }
        if(plusMoney < 0 ){
            return console.log(new Error("La cantidad a depositar tiene que ser un numero positiva"))
        }
        acum += plusMoney

        return {
            getAcumMoney: () => { //Funcion para obtener el valor de la variable privada del closure
                return acum
            },
            minusMoney: (paramMinusMoney)=> { //Funcion para alterar el valor de la variable privada del closure en este caso restar
                if(isNaN(paramMinusMoney) || typeof paramMinusMoney != "number"){
                    return console.log(new Error("La cantidad a retirar tiene que ser un numero")) 
                }
                if(paramMinusMoney < 0 ){
                    return console.log(new Error("La cantidad a depositar tiene que ser un numero positiva"))
                }
                acum -= paramMinusMoney
            }
            
        }
    }
    return managerMoneyBox
}
let moneyBoxTemp = moneyBox(12)
console.log(moneyBoxTemp(10).getAcumMoney())
console.log(moneyBoxTemp(24).getAcumMoney())
moneyBoxTemp(0).minusMoney(12)
console.log(moneyBoxTemp(0).getAcumMoney())
//moneyBoxTemp(-12)
//moneyBoxTemp("12")
//moneyBoxTemp(0).minusMoney(-12)
//moneyBoxTemp(0).minusMoney("22")