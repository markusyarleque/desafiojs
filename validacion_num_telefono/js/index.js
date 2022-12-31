// Validar que el número de teléfono tenga el formato correcto:
// XXXX-XX-XX

const input = document.getElementById('input');
const buscar = document.getElementById('buscar');
const resultado = document.getElementById('resultado');

const regex = new RegExp(/[0-9]{4}-[0-9]{2}-[0-9]{2}/, 'g');

buscar.addEventListener('click', ()=> {
    const valor = input.value;
    if(regex.test(valor)){
        resultado.innerText = 'El número de teléfono ingresado es válido!';
    }else{
        resultado.innerText = 'El número de teléfono ingresado no es válido!';
    }
});