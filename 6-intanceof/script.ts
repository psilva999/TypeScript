//class
class Store {
  nome: string;
  price: number;

  constructor (nome: string, price: number) {
    this.nome = nome
    this.price = price
  }

  total() {
    return `$${ this.price }`
  }
}

const books = new Store('Hobbit - golden collection', 33.9)
console.log(books)

//instanceof
class Sabaton {
  song: string;

  constructor(song: string) {
    this.song = song
  }
}

class IronMaiden {
  year: number;

  constructor(year: number) {
    this.year = year
  }
}

function buscaBanda(busca: string) {
  if (busca === 'Wolfpack')
    return new Sabaton('Sabaton - Wolfpack')

  else if (busca === '1994') 
    return new IronMaiden(1994)

  return null
}

const banda = buscaBanda('Wolfpack')

if (banda instanceof Sabaton) {
  console.log(banda.song)
  console.log(banda instanceof Sabaton)
  document.body.innerHTML += banda.song
}

//extends
class Clouds {
  nome: string;

  constructor(nome: string) {
    this.nome = nome
  }
}

class Empire extends Clouds {
  autor: string;

  constructor(nome: string, autor: string) {
    super(nome)
    this.autor = autor
  }
}

class Tempo extends Clouds {
  tempo: number;

  constructor(membro: string, tempo: number) {
    super(membro)
    this.tempo = tempo
  }
} 

function buscaIron(busca: string) {
  if (busca === 'Empire')
    return new Empire('Empire', 'Of The Clouds')

  if (busca === 'Horses Silence')
    return new Tempo('Horses Silence', 1933)

  return null
}

const clouds1 = buscaIron('Empire'),
      clouds2 = buscaIron('Horses Silence')

if (clouds1 instanceof Clouds) {
  console.log(clouds1 instanceof Clouds)
  console.log(clouds1.nome)

  clouds1.nome
  document.body.innerHTML += `<p>${ clouds1.nome }</p>`
}

if (clouds2 instanceof Clouds) {
  console.log(clouds2 instanceof Clouds)
  console.log(clouds2.nome)

  clouds2.nome
  document.body.innerHTML += `<p>${ clouds2.nome }</p>`
}

//interface instanceof
interface Elizabeth {
  nome: string
}

const person: Elizabeth = {
  nome: 'Elizabeth',
}

//error
// if (person instanceof Elizabeth) {
// }

//Exercicio
const link = document.getElementById('origamid')

if (link instanceof HTMLAnchorElement) {
  console.log(link.href)
  link.href = link.href.replace('http://', 'https://')
  console.log(link.href)
}
