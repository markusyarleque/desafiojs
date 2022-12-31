"use strict"

const suma = document.getElementById('+');
const resta = document.getElementById('-');
const multi = document.getElementById('*');
const div = document.getElementById('/');
const igual = document.getElementById('=');
const number = document.getElementById('num');
const rpta = document.getElementById('resultado');

var operador, valor = [];

suma.addEventListener('click', calcular);
resta.addEventListener('click', calcular);
multi.addEventListener('click', calcular);
div.addEventListener('click', calcular);
igual.addEventListener('click', calcular);

const operacion = { valor1: null, valor2: null, operador: null };
let tempOperador = null;

function mostrarValores(valor) {
    rpta.innerText = valor;
}

function calcular(evento) {

    const valor = number.value === '' ? 0 : parseInt(number.value);
    number.value = 0;

    if(!operacion.valor1){
        operacion.valor1 = valor;
        operacion.operador = evento.target.innerText;
        mostrarValores(`${operacion.valor1} ${operacion.operador}`);
        return;
    }

    if(!operacion.operador){
        operacion.operador = evento.target.innerText;
        mostrarValores(`${operacion.valor1} ${operacion.operador}`);
        return;
    }

    operacion.valor2 = valor;

    if(evento.target.innerText !== '='){
        tempOperador = evento.target.innerText;
    }

    total();

}

function total() {
    let total;
    switch (operacion.operador) {
        case '+':
            total = operacion.valor1 + operacion.valor2;
            break;
        case '*':
            total = operacion.valor1 * operacion.valor2;
            break;
        case '-':
            total = operacion.valor1 - operacion.valor2;
            break;
        case '/':
            total = operacion.valor1 / operacion.valor2;
            break;
    }

    mostrarValores(`${total} ${tempOperador ?? ''}`);

    operacion.valor1 = total;
    operacion.valor2 = null;
    operacion.operador = tempOperador ?? null;
    tempOperador = null;
}