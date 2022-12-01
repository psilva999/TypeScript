"use strict";
//generics
function retorno(a) {
    return a;
}
console.log(retorno('A life').charAt(0), retorno(127).toFixed(3));
//exemplo 2
const numeros = [1, 2, 3, 4, 5, 6], sabaton = ['lifetime at war', 'last stand', 'Chritsmas truce', 'To hell and back', 'Attero Dominatus'];
function songs(lista) {
    return lista.slice(0, 5);
}
const five1 = songs(numeros), five2 = songs(sabaton);
console.log(five1, five2);
//exemplo 3
function notNull(arg) {
    if (arg !== null)
        return arg;
    else
        return null;
}
console.log(notNull(200)?.toFixed(6));
console.log(notNull('people')?.toUpperCase());
//exemplo 4
function tipoDado(a) {
    const resultado = {
        dado: a,
        tipo: typeof a
    };
    console.log(resultado, resultado.dado, resultado.tipo);
    return resultado;
}
tipoDado(true);
//extends
const link = document.querySelector("a"), li = document.querySelector('li');
function extraiTexto(el) {
    return el.innerText;
}
if (link)
    console.log(extraiTexto(link));
//exemplo 2
function compras(item) {
    return item.innerText;
}
if (li)
    console.log(compras(li));
//Exemplo 3
function $(item) {
    return document.querySelector(item);
}
const pedido = $('.pedido')?.href;
console.log(pedido);
//métodos
const limitado = document.querySelector('.limitado');
console.log(limitado?.href);
async function getData(url) {
    const response = await fetch(url);
    return await response.json();
}
async function handleData() {
    const notebook = await getData('https://api.origamid.dev/json/notebook.json');
    console.log(notebook.nome, notebook.preco, notebook.descricao, notebook.garantia, notebook.seguroAcidentes, notebook.empresaFabricante, notebook.empresaMontadora);
}
handleData();
