//keyof
interface Produto {
  nome: string;
  price: string;
}

let chave: keyof Produto

chave = 'nome'
chave = 'price'

console.log(chave)

//typeof
function coordenadas(x: number, y: number) {
  return { x, y }
}

let tenente: typeof coordenadas

tenente = (x: number, y: number) => {
  return { x, y }
}

console.log(tenente)

//querySelector
interface Elementos {
  a: HTMLAnchorElement;
  div: HTMLElement;
  body: HTMLBodyElement;
}

function selecionar<K extends keyof Elementos>(seletor: K): Elementos[K] | null {
  return document.querySelector(seletor)
}

console.log(selecionar('a')?.href)

//checkInterface
async function fetchData<T>(url: string): Promise<T> {
  const base = 'https://api.origamid.dev/json',
        response = await fetch(base + url)

  return await response.json()
}

interface Jogo {
  nome: string;
  ano: number;
  desenvolvedora: string;
  plataforma: string[];
}

interface Livro {
  nome: string;
  ano: number;
  autor: string;
  paginas: number;
}

function checkInter<G>(obj: unknown, key: keyof G): obj is G {
  if (obj && typeof obj === 'object' && key in obj)
    return true

  else 
    return false
}

async function handleData() {
  const jogo= await fetchData('/jogo.json'),
        livro= await fetchData('/livro.json')

  if (checkInter<Jogo>(jogo, 'desenvolvedora'))
    console.log(jogo.ano)

  if (checkInter<Livro>(livro, 'autor'))
    console.log(livro.autor)
}

handleData()

//objetos
