"use strict";
//class
console.log(document.constructor);
class Galeria {
    tipo = 'Galeria';
    nome;
    preco;
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}
const photos = new Galeria('letreira', 23);
console.log(photos.tipo, photos.preco);
//modifiers
class Produto {
    tipo = 'produto';
    preco;
    nome;
    constructor(nome, preco) {
        this.nome = nome;
        this.tipo;
        this.preco = preco;
    }
    getPreco() {
        return Produto.recriando(this.preco);
    }
    static recriando(preco) {
        return `$ ${preco}`;
    }
}
const alternativa = new Produto('vem', 300);
console.log(alternativa.getPreco());
console.log(Produto.recriando);
//tuples
const produto1 = ['notebook', 3000], produto2 = ['notebook', 3000];
console.log(produto2[0].toUpperCase());
console.log(produto2[1].toFixed(3));
if (produto1[0] === 'string')
    console.log(produto1[0].toLocaleLowerCase());
const [nome, preco] = produto2;
console.log(nome, preco);
//as const 
function texto(selector) {
    const el = document.querySelector(selector);
    if (el)
        return [el, el.innerText];
    else
        return null;
}
const button = texto('button');
if (button)
    button[0].classList;
console.log(button);
// 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
// 2 - Defina o tipo/interface de cada venda (tuple)
// 3 - Some o total das vendas e mostre na tela
fetchVendas();
async function fetchVendas() {
    const response = await fetch('https://api.origamid.dev/json/vendas.json'), data = await response.json();
    somarVendas(data);
}
function somarVendas(preco) {
    const somar = preco.reduce((total, atual) => {
        return total + atual[1];
    }, 0);
    document.body.innerHTML += `
    <br>
    pc: $${somar}`;
}
