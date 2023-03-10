function generarNumeroAleatorio(max) {
    return Math.floor(Math.random() * max);
}

function generarRocas() {

    var fragmento = new DocumentFragment();

    for (let i = 0; i <= 50; i++) {
        const elemento = document.createElement('div');
        elemento.style.position = 'absolute';
        elemento.style.width = `${generarNumeroAleatorio(70)}px`;
        elemento.style.height = `${generarNumeroAleatorio(70)}px`;
        elemento.style.top = `${generarNumeroAleatorio(window.innerHeight)}px`;
        elemento.style.left = `${generarNumeroAleatorio(window.innerWidth)}px`;
        elemento.style.borderRadius = '10px';
        elemento.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        fragmento.appendChild(elemento);
    }

    document.getElementById('piso').appendChild(fragmento);
}

generarRocas();

const resultado = document.getElementsByTagName('span')[0];

document.addEventListener('mousemove', (evento)=>{
    const x = evento.clientX;
    const y = evento.clientY;
    const el = document.elementFromPoint(x, y);
    if(el.tagName == 'BODY' || el.tagName == 'HTML'){
        resultado.innerText = 'El puntero se está quemando!';
    }else{
        resultado.innerText = 'El puntero está a salvo!';
    }
});