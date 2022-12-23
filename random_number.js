//Función para obtener un número aleatorio entre 2 números dados
function random(a, b){
    if(a == b){
        return false;
    }
    return Math.floor(Math.random()*(b - a) + a);
}

console.log(random(10,20)); //16
console.log(random(5,10)); //6
console.log(random(10,10)); //false
console.log(random(10,8)); //9
console.log(random(-25,-22)); //-23