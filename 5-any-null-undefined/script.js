"use strict";
//any
function free(aurelius) {
    return aurelius.trim().toUpperCase();
}
console.log(free(' Maximus '));
// console.log(free(200)) erro
//null
const button = document.querySelector('button'), config = localStorage.getItem('config');
if (button !== null) {
    button.style.fontSize = '5rem';
    button.style.padding = '1rem 2rem';
    button.style.borderRadius = '.5rem';
}
else
    console.log('button não existe');
if (button)
    console.log(button);
button?.click();
console.log(typeof null);
//undefined
const data = {};
let total;
console.log(data, total);
const livro = {}, game = {
    nome: 'Lord of the Rings',
};
console.log(game.nome?.toUpperCase());
console.log(livro.nome?.toUpperCase());
