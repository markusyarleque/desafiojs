//Primero creamos un array que contenga los diferentes productos
//Atributos de producto: id, nombre, marca, fecha de expiración
var producto = [
    {
        id: 1,
        nombre: 'bebida energizante',
        marca: 'Volt',
        fecha_exp: '07-2024'
    },
    {
        id: 2,
        nombre: 'bebida gasificada',
        marca: 'Inka Kola',
        fecha_exp: '01-2025'
    },
    {
        id: 3,
        nombre: 'galletas',
        marca: 'Óreo',
        fecha_exp: '02-2023'
    },
    {
        id: 4,
        nombre: 'chocolates',
        marca: 'M&M',
        fecha_exp: '12-2023'
    },
    {
        id: 5,
        nombre: 'gansitos',
        marca: 'Gominola',
        fecha_exp: '11-2025'
    }
]

//Luego creamos funciones para realizar búsqueda según atributos
function buscarId(id){
    return producto.filter((p) => p.id === id);
}
console.log(buscarId(2));
console.log(buscarId(5));

function buscarNombre(nombre){
    return producto.filter((p) => p.nombre === nombre);
}
console.log(buscarNombre('galletas'));

function buscarMarca(marca){
    return producto.filter((p) => p.marca === marca);
}
console.log(buscarMarca('M&M'));

function buscarFechaExp(fecha){
    return producto.filter((p) => p.fecha_exp === fecha);
}
console.log(buscarFechaExp('07-2024'));
