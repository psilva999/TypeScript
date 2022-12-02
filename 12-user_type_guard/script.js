"use strict";
///array
async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json'), json = await response.json();
    handleCursos(json);
}
function handleCursos(data) {
    if (data instanceof Array)
        console.log('Instância de Array');
    if (Array.isArray(data))
        console.log('É array');
}
//
function criaString(value) {
    return typeof value === 'string';
}
function handleData(data) {
    if (criaString(data))
        data.toUpperCase();
}
handleData("psilva999");
handleData(300);
//
async function fetchProduto() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json'), json = response.json();
    handleProduto(json);
}
fetchProduto();
function isProduto(value) {
    if (value &&
        typeof value === 'object' &&
        'nome' in value &&
        'preco' in value)
        return true;
    else
        return false;
}
function handleProduto(data) {
    if (isProduto(data))
        console.log(data);
}
//exercício
// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// 2 - Defina a interface da API
// 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// 4 - Use Type Guards para garantir a Type Safety do código
// 5 - Preencha os dados da API na tela.
async function fetchApi() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json'), json = response.json();
    handleApi(json);
}
fetchApi();
function isCurso(curso) {
    if (curso &&
        typeof curso === 'object' &&
        'nome' in curso &&
        'horas' in curso &&
        'tags' in curso) {
        return true;
    }
    else {
        return false;
    }
}
function handleApi(data) {
    if (Array.isArray(data)) {
        data.filter(isCurso).forEach(item => {
            document.body.innerHTML += `
        <div>
          <h2>${item.nome}</h2>
          <p>${item.horas}</p>
          <p>${item.tags.join(', ')}</p>
        </div>
      `;
        });
    }
}
