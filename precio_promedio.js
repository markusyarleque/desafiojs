//Función que permite determinar el precio promedio de una casa según su localidad
//Cada objeto contiene una Id, número de habitaciones, tamaño en metros cuadrados, localidad y precio de venta.
//Precio promedio = Suma de todos los precios de casa de la misma localidad / número de casas por localidad

var casa = [
    {
        id: 1,
        num_hab: 3,
        tamaño: 100,
        localidad: 'Talara',
        precio_venta: 20000
    },
    {
        id: 2,
        num_hab: 1,
        tamaño: 70,
        localidad: 'Piura',
        precio_venta: 10000
    },
    {
        id: 3,
        num_hab: 5,
        tamaño: 200,
        localidad: 'Talara',
        precio_venta: 50000
    },
    {
        id: 4,
        num_hab: 2,
        tamaño: 120,
        localidad: 'Piura',
        precio_venta: 30000
    },
    {
        id: 5,
        num_hab: 2,
        tamaño: 100,
        localidad: 'Piura',
        precio_venta: 20000
    },
    {
        id: 6,
        num_hab: 6,
        tamaño: 300,
        localidad: 'Talara',
        precio_venta: 80000
    },
    {
        id: 7,
        num_hab: 2,
        tamaño: 200,
        localidad: 'Talara',
        precio_venta: 200000
    },
    {
        id: 8,
        num_hab: 7,
        tamaño: 700,
        localidad: 'Piura',
        precio_venta: 1000000
    },
    {
        id: 9,
        num_hab: 5,
        tamaño: 300,
        localidad: 'Talara',
        precio_venta: 150000
    },
    {
        id: 10,
        num_hab: 4,
        tamaño: 180,
        localidad: 'Piura',
        precio_venta: 300000
    },
    {
        id: 11,
        num_hab: 2,
        tamaño: 100,
        localidad: 'Piura',
        precio_venta: 20000
    },
    {
        id: 12,
        num_hab: 4,
        tamaño: 500,
        localidad: 'Talara',
        precio_venta: 285000
    }

]

function precioPromedio(localidad){
    var suma = 0, num_casas = 0;
    casa.filter((c) => c.localidad === localidad).map((c) => {
        suma = suma + c.precio_venta;
        num_casas++;
    })
    return Math.round(suma / num_casas);
    
}
console.log(precioPromedio('Talara'))
console.log(precioPromedio('Piura'))