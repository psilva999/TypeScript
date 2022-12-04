"use strict";
let chave;
chave = 'nome';
chave = 'price';
console.log(chave);
//typeof
function coordenadas(x, y) {
    return { x, y };
}
let tenente;
tenente = (x, y) => {
    return { x, y };
};
console.log(tenente);
function selecionar(seletor) {
    return document.querySelector(seletor);
}
console.log(selecionar('a')?.href);
//checkInterface
async function fetchData(url) {
    const base = 'https://api.origamid.dev/json', response = await fetch(base + url);
    return await response.json();
}
function checkInter(obj, key) {
    if (obj && typeof obj === 'object' && key in obj)
        return true;
    else
        return false;
}
async function handleData() {
    const jogo = await fetchData('/jogo.json'), livro = await fetchData('/livro.json');
    if (checkInter(jogo, 'desenvolvedora'))
        console.log(jogo.ano);
    if (checkInter(livro, 'autor'))
        console.log(livro.autor);
}
handleData();
//objetos
