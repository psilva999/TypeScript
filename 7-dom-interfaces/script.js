"use strict";
//Interfaces do DOM
// const links = document.querySelectorAll('.link')
// console.log(links instanceof NodeList)
// links.forEach(link => {
//   if (link instanceof HTMLAnchorElement)
//     console.log(link.href)
//   else 
//     console.log(typeof link)
// })
// const anchorLinks = Array.from(links).filter(
//   (link) => console.log(link instanceof HTMLAnchorElement)
// )
// Exercício
// 1 - Selecione os elementos com a classe link.
// 2 - Crie uma função que deve ser executada para cada elemento.
// 3 - Modificar através da função o estilo da color e border.
const links = document.querySelectorAll('.link');
links.forEach(link => {
    if (link instanceof HTMLElement) {
        console.log(link);
        ativarElemento(link);
    }
});
function ativarElemento(item) {
    item.style.color = 'orangered';
    item.style.border = '.1rem solid green';
    item.style.borderRadius = '.1rem';
    item.style.padding = '.2rem .4rem';
    item.style.fontSize = '1.5rem';
}
