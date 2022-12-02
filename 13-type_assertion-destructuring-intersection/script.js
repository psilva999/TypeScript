"use strict";
//as
const videos = document.querySelector('.player');
async function fetichGaleria() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json'), json = response.json();
}
//non-null-operator
const video = document.querySelector("video");
// erro runtime, não existe volume de null
// video.volume;
// erro runtime
document.querySelector('a').href = 'https://www.origamid.com';
//outras sintaxes
const video1 = document.querySelector('.player');
const video2 = document.querySelector('.player');
const video3 = document.querySelector('.player');
const video4 = document.querySelector('.player');
// video1.volume;
// video2.volume;
// video3?.volume;
// (video4 as HTMLVideoElement).volume;
//destructuring
const { body } = document;
function handleData({ nome, preco }) {
    nome.includes('livros');
    preco.toFixed(2);
}
handleData({
    nome: 'Notebook',
    preco: 2000,
});
//conhecer dados
function handleClick({ currentTarget, pageX, }) {
    if (currentTarget instanceof HTMLElement)
        currentTarget.innerHTML = `<h1>Mouse em x: ${pageX}</h1>`;
}
document.documentElement.addEventListener('click', handleClick);
//rest
function comparar(tipo, ...numeros) {
    if (tipo === 'maior')
        return Math.max(...numeros);
    if (tipo === 'menor')
        return Math.min(...numeros);
}
console.log(comparar('maior', 3, 2, 4, 30));
console.log(comparar('menor', 3, 4, 5, 40));
function handleProdutoCarro(dados) {
    dados.rodas;
    dados.portas;
    dados.preco;
}
handleProdutoCarro({
    preco: 20000,
    rodas: 4,
    portas: 5,
});
const dado1 = {
    preco: 20000,
    rodas: 4,
    portas: 5,
};
const dado2 = {
    preco: 20000,
    rodas: 4,
    portas: 5,
};
window.userId = 200;
console.log(window.userId);
window.UserData = {};
function validJSON(str) {
    try {
        JSON.parse(str);
    }
    catch (e) {
        return false;
    }
    return true;
}
function isUserData(obj) {
    if (obj &&
        typeof obj === 'object' &&
        ('nome' in obj || 'email' in obj || 'cpf' in obj)) {
        return true;
    }
    else {
        return false;
    }
}
function loadLocalStorage() {
    const localUserData = localStorage.getItem('UserData');
    if (localUserData && validJSON(localUserData)) {
        const UserData = JSON.parse(localUserData);
        if (isUserData(UserData)) {
            Object.entries(UserData).forEach(([key, value]) => {
                const input = document.getElementById(key);
                if (input instanceof HTMLInputElement) {
                    input.value = value;
                    window.UserData[key] = value;
                }
            });
        }
    }
}
loadLocalStorage();
function handleInput({ target }) {
    if (target instanceof HTMLInputElement) {
        window.UserData[target.id] = target.value;
        localStorage.setItem('UserData', JSON.stringify(window.UserData));
    }
}
const form = document.querySelector('#form');
form?.addEventListener('keyup', handleInput);
