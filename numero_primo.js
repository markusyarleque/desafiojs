//Función para evaluar si un número es Primo o no.
function esPrimo(num){
    if(num <= 1){
        return false;
    }
    for(let i = 2; i < num; i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}

console.log(esPrimo(2)); //true
console.log(esPrimo(7)); //true
console.log(esPrimo(10)); //false
console.log(esPrimo(15)); //false
console.log(esPrimo(20)); //false
console.log(esPrimo(29)); //true