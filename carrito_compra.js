//Clase producto que contiene Nombre, Fecha de vencimiento y precio de compra
class Producto{
    nombre;
    fecha_venc;
    precio;

    constructor(nombre, fecha_venc, precio){
        this.nombre = nombre;
        this.fecha_venc = new Date(fecha_venc);
        this.precio = precio;
    }
}

//Función carrito de Compra que recibe como parámetro una lista de productos y calcular el precio de compra de la lista
function carritoCompra(lista){
    //Filtrar productos vencidos
    lista = lista.filter((p) => p.fecha_venc > new Date());
    return lista.reduce((a,b) => a += b.precio, 0);
}
console.log(carritoCompra([
    new Producto('Galletas','2022-08-21',12.50),
    new Producto('Chocolates','2023-01-01',22.00),
    new Producto('Gaseosas','2024-08-11',45.50),
    new Producto('Dulces','2025-10-12',4.00),
]));