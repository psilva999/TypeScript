function multi(a: string, b: string) {
  return a + b
}

console.log(multi('Hello,', 'World!'))

//annotation
const agenda: string = 'Cheia'
const diasJaneiro: number = 31

const war: {
  pais: string;
  year: number;
  enemy: string;
} = {
  pais: 'EUA',
  year: 1945,
  enemy: 'Nazi'
}

//Inference
const region = 'Omaha',
      day = 6,
      impor = 'dia D',

      year = 1944,
      month = 'June'

console.log(`Na praia de ${ region }, no dia 0${6}/${month}/${year}, os aliados iniciaram a ofensiva conhecida como ${ impor }`)

const ww2 = {
  pais: 'EUA',
  year: 1945,
  enemy: 'Nazi'
}

const end = year === 1944? true : 'ano errado'

//Function
function berlin(a: string, b: string, c: string) {
  return `${ a }! ${ b }! Berlin is ${ c }!`
}

console.log(berlin('Attero', 'Dominatus', 'burning'))

const bandas = {
  nome: 'sabaton',
  origem: 'suecia',
  formacao: '1999'
}

function saberDaBanda(banda: { nome:string; origem:string; formacao:string; }) {
  banda.origem = `país europeu: ${ banda.origem }`
  return banda
}

const talDeBanda = saberDaBanda(bandas)

console.log(talDeBanda)

//Exercício 1
function ajustaTexto(txt: string) {
  return txt.trim().toLowerCase()
}

console.log(ajustaTexto(' Empire of the Clouds '))

//Exercício 2
const input = document.querySelector("input"),
      total = localStorage.getItem('total')

if (input && total) {
  input.value = total
  totalGanho(+input.value)
}

function totalGanho(value: number) {
  const p = document.querySelector('p')
  if (p)
    p.innerText = `total: ${ value + 100 - value * .2 }`
}

function totalMudou() {
  if (input) {
    localStorage.setItem('total', input.value)
    totalGanho(+input.value)
  }
}

if (input)
  input.addEventListener('keyup', totalMudou)

