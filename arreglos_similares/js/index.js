//Función para evaluar si dos arreglos son exactamente iguales
function compararArrays(array1,array2){
    if(array1.length !== array2.length){
        return false;
    }
    for(let i = 0; i < array1.length; i++){
        if(array1[i] !== array2[i]){
            return false;
        }
    }
    return true;
}

console.log(compararArrays([1,2,3], [4,5,6])); //false
console.log(compararArrays([1,2,3], [4,5,6,7,8,9])); //false
console.log(compararArrays([1,2,3], [1,2,3])); //true
console.log(compararArrays([0,1,2], [0,1,2])); //true
console.log(compararArrays([1,2,3], ['1','2','3'])); //false