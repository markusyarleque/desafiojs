//Array con nombre y apellidos de personas
var persona = [
    'Manuel Alcántara',
    'Micaela Rodriguez',
    'Anabel Crisanto',
    'Zoila Valladolid',
    'Bruno León',
    'Mateo Córdova',
    'Luis Alfonso',
]

//Función para ordener la lista alfabéticamente por nombre
function ordenarNombre(){
    return persona.sort()
}
console.log(ordenarNombre());

//Función para ordener la lista alfabéticamente por apellido
function ordenarApellido(){
    return persona.sort(function(a,b){
        return a.split(' ')[1] > b.split(' ')[1] ? 1 : -1
    })
    
}
console.log(ordenarApellido());