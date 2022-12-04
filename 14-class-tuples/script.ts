//class
console.log(document.constructor)

class Galeria {
  tipo = 'Galeria';
  nome: string;
  preco: number | undefined;

  constructor(nome: string, preco?: number) {
    this.nome = nome
    this.preco = preco
  }
}

const photos = new Galeria('letreira', 23)

console.log(photos.tipo, photos.preco)

//modifiers
class Produto {
  private tipo = 'produto';
  protected preco: number;
  readonly nome: string;

  constructor(nome: string, preco: number) {
    this.nome = nome
    this.tipo
    this.preco = preco
  }

  getPreco() {
    return Produto.recriando(this.preco)
  }

  static recriando(preco: number) {
    return `$ ${ preco }`
  }
}

const alternativa = new Produto('vem', 300)

console.log(alternativa.getPreco())
console.log(Produto.recriando)

//tuples
const produto1 = [ 'notebook', 3000 ],
      produto2: [ string, number ] = [ 'notebook', 3000 ]

console.log(produto2[0].toUpperCase())
console.log(produto2[1].toFixed(3))

if (produto1[0] === 'string')
  console.log(produto1[0].toLocaleLowerCase())

const [ nome, preco ] = produto2
console.log(nome, preco)

//as const 
function texto(selector: string) {
  const el = document.querySelector<HTMLElement>(selector)

  if (el)
    return [el, el.innerText] as const

  else 
    return null
}

const button = texto('button')

if (button) 
  button[0].classList

console.log(button)

// 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
// 2 - Defina o tipo/interface de cada venda (tuple)
// 3 - Some o total das vendas e mostre na tela
fetchVendas()
async function fetchVendas() {
  const response = await fetch('https://api.origamid.dev/json/vendas.json'),
        data = await response.json()

  somarVendas(data);
}

interface Valores {
  marca: string;
  cor: string;
}

type Venda = [ string, number, string, Valores ]

function somarVendas(preco: Venda[]) {
  const somar = preco.reduce((total, atual) => {
    return total + atual[1]
  }, 0)

  document.body.innerHTML += `
    <br>
    pc: $${ somar }`
}
