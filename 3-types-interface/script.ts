//type interface
type DadosUser = { 
  nome: string;
  dados: number;
  valido: boolean;
}

function insereDados(data: DadosUser) {
  document.body.innerHTML += `
    <div>
      <h2>${ data.nome }</h2>
      <p>${ data.dados }</p>
      <li>${ data.valido? 'valido' : 'inválido' }</li>
    </div>
  `
}

const servia: DadosUser = {
  nome:'psilva',
  dados:23,
  valido:true,
}
insereDados (servia)

const camaroes: DadosUser = {
  nome:'Antony',
  dados:3,
  valido:true
}
insereDados(camaroes)

//pode fazer dessa forma
type TimesAlemaes = 'bayern de munique' | 'Schalke' | 'Borussia Dortmund'

function germany(data: TimesAlemaes) {
  if (data === 'bayern de munique') 
    console.log("campeao novamente")
}

germany('bayern de munique')

//Interface
interface Rodada {
  time: string,
  gols: number,
  valido: boolean,
}

const timao: Rodada = {
  time: 'Brasil',
  gols: 2,
  valido: true,
}

function jogos() {
  document.body.innerHTML += `
    <div>
      <h2>${ timao.time }</h2>
      <p>R$ ${ timao.gols }</p>
      <p>Gol bonito: ${ timao.valido ? 'sim' : 'não'}</p>
    </div>
  `
}

jogos()

interface Empresa { // !
  nome: string,
  fundacao: number,
  pais: string,
}

interface Produto {
  nome: string;
  preco: number;

  descricao: string;
  garantia: string; //!
  seguro: boolean;

  empresaFabricante: Empresa;
  empresaMontadora: Empresa;
}

async function fetchProduct() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const data = await response.json();
  showProduct(data);
}
fetchProduct();

function showProduct(data: Produto) {
  document.body.innerHTML += `
    <h1>Produtos</h1>
    <div>
      <h2>${ data.nome }</h2>
      <li>${ data.preco }</li>

      <li>${ data.descricao }</li>
      <li>${ data.garantia }</li>
      <li>${ data.seguro }</li>

      <div> <h2>${ data.empresaFabricante.nome }</h2>
        <li>${ data.empresaFabricante.pais }</li>
        <li>${ data.empresaFabricante.fundacao }</li>
      </div>

      <div> <h2>${ data.empresaMontadora.nome }</h2>
        <li>${ data.empresaMontadora.pais }</li>
        <li>${ data.empresaMontadora.fundacao }</li>
      </div>
    </div>
  `
}
