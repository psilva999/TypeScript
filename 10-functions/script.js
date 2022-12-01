"use strict";
//function
function somar(a, b, c) {
    return a + b * (c ? c : 0);
}
console.log(somar(3, 4));
console.log(somar(5, 4, 3));
const subtrair = (a, b) => a - b;
console.log(subtrair(12, 13));
function palavras(a, b) {
    return `Uma oferta de ${a} vem de: ${b ? b : a}`;
}
console.log(palavras('Emprego', 'Floripa'));
//void
function pati(value) {
    if (typeof value === 'string')
        return true;
}
if (pati('vem'))
    console.log(pati('ta ali'));
function calcula(forma) { }
function normalizar(valor) {
    if (typeof valor === 'string')
        return valor.trim().toUpperCase();
    else
        return valor.map(item => item.trim().toLowerCase());
}
console.log(normalizar('produtos'));
console.log(normalizar(['maçã', 'pera']));
function $(seletor) {
    return document.querySelector(seletor);
}
console.log($('a')?.href);
console.log($('video')?.volume);
console.log($('.vem')?.innerHTML);
function arredondar(valor) {
    if (typeof valor === 'number')
        return Math.ceil(valor);
    else
        return Math.ceil(Number(valor)).toString();
}
console.log(arredondar(130.32));
console.log(arredondar('394.55'));
