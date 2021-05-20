
const foods = (flag=true, prefix= "Comida: ") => {
    if(flag){
        /**
         * El block scope no deja que las variables sean 
         * usadas fuera de este bloque cuando son inicializadas 
         * con let y const, mientras el var si permite que su valor
         * salga de este bloque
         */
        let food1 = prefix+"Hot dog" 
        var food2 = prefix+"Ensalada"
        const food3 = prefix+"Malteada"
        console.log(food1)
        console.log(food3)
    }
    console.log(food2)
}

foods()
foods(false)
foods(true, "Food: ")

