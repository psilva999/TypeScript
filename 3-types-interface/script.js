"use strict";
function insereDados(data) {
    document.body.innerHTML += `
    <div>
      <h2>${data.nome}</h2>
      <p>${data.dados}</p>
      <li>${data.valido ? 'valido' : 'inválido'}</li>
    </div>
  `;
}
const servia = {
    nome: 'psilva',
    dados: 23,
    valido: true,
};
insereDados(servia);
const camaroes = {
    nome: 'Antony',
    dados: 3,
    valido: true
};
insereDados(camaroes);
function germany(data) {
    if (data === 'bayern de munique')
        console.log("campeao novamente");
}
germany('bayern de munique');
const timao = {
    time: 'Brasil',
    gols: 2,
    valido: true,
};
function jogos() {
    document.body.innerHTML += `
    <div>
      <h2>${timao.time}</h2>
      <p>R$ ${timao.gols}</p>
      <p>Gol bonito: ${timao.valido ? 'sim' : 'não'}</p>
    </div>
  `;
}
jogos();
async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    showProduct(data);
}
fetchProduct();
function showProduct(data) {
    document.body.innerHTML += `
    <h1>Produtos</h1>
    <div>
      <h2>${data.nome}</h2>
      <li>${data.preco}</li>

      <li>${data.descricao}</li>
      <li>${data.garantia}</li>
      <li>${data.seguro}</li>

      <div> <h2>${data.empresaFabricante.nome}</h2>
        <li>${data.empresaFabricante.pais}</li>
        <li>${data.empresaFabricante.fundacao}</li>
      </div>

      <div> <h2>${data.empresaMontadora.nome}</h2>
        <li>${data.empresaMontadora.pais}</li>
        <li>${data.empresaMontadora.fundacao}</li>
      </div>
    </div>
  `;
}
