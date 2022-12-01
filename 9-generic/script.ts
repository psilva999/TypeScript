//generics
function retorno<Tipo>(a: Tipo): Tipo {
  return a
}

console.log(retorno('A life').charAt(0), retorno(127).toFixed(3))

//exemplo 2
const numeros = [1, 2, 3, 4, 5, 6],
      sabaton = ['lifetime at war', 'last stand', 'Chritsmas truce', 'To hell and back', 'Attero Dominatus']

function songs<Tipo>(lista: Tipo[]): Tipo[] {
  return lista.slice(0, 5)
}

const five1 = songs<number>(numeros),
      five2 = songs<string>(sabaton)

console.log(five1, five2)

//exemplo 3
function notNull<Tipo>(arg: Tipo) {
  if (arg !== null) return arg

  else return null
}

console.log(notNull(200)?.toFixed(6))
console.log(notNull('people')?.toUpperCase())

//exemplo 4
function tipoDado<F>(a: F): { dado: F; tipo: string } {
  const resultado = {
    dado: a,
    tipo: typeof a
  }

  console.log(resultado, resultado.dado, resultado.tipo)
  return resultado
}

tipoDado(true)

//extends
const link = document.querySelector("a"),
      li = document.querySelector('li')

function extraiTexto<Tipo extends HTMLElement>(el: Tipo): string {
  return el.innerText
}

if (link)
  console.log(extraiTexto(link))

//exemplo 2
function compras<Data extends HTMLElement> (item: Data): string {
  return item.innerText
}

if (li) 
  console.log(compras(li))

//Exemplo 3
function $<Hoje extends Element> (item: string): Hoje | null {
  return document.querySelector(item)
}

const pedido = $<HTMLAnchorElement>('.pedido')?.href

console.log(pedido)

//métodos
const limitado = document.querySelector<HTMLAnchorElement>('.limitado')

console.log(limitado?.href)

async function getData<T>(url: string): Promise<T> {
  const response = await fetch(url)

  return await response.json()
}

interface SubDescricao {
  nome: string;
  fundacao: number;
  pais: string;
}

interface Notebook {
  nome: string;
  preco: number;

  descricao: string;
  garantia: string;
  seguroAcidentes: boolean;

  empresaFabricante: SubDescricao;
  empresaMontadora: SubDescricao;
}

async function handleData() {
  const notebook = await getData<Notebook>('https://api.origamid.dev/json/notebook.json')

  console.log(
    notebook.nome, 
    notebook.preco,

    notebook.descricao,
    notebook.garantia,
    notebook.seguroAcidentes,
    
    notebook.empresaFabricante,
    notebook.empresaMontadora)
}
handleData()
