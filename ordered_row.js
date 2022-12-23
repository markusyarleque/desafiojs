//Función para ordenar un arreglo de forma ascendente según el número ingresado positivo mayor a 0
var lista = [];

function newRow(num) {
    if (num <= 0) {
        return false;
    }
    lista.push(num);
    lista.sort(function(a,b){
        return a - b;
    });
    return lista;
}

console.log(newRow(0)); //false
console.log(newRow(5)); //5
console.log(newRow(1)); //[1,5]
console.log(newRow(12)); //[1,5,12]
console.log(newRow(3)); //[1,3,5,12]
console.log(newRow(0)); //false
console.log(newRow(1)); //[1, 1,3,5,12]