function typeGuard(value: any) {
  if (typeof value === 'string')
    return value.toUpperCase()

  if (typeof value === 'number')
    return value.toFixed(3)

  if (value instanceof HTMLElement)
    return value.innerText
}

console.log(
  typeGuard('tite'),
  typeGuard(23),
  typeGuard(document.body)
)

//
const obj = {
  nome: 'psilva999'
}

if ('nome' in obj)
  console.log("vem")

interface Galeria {
  nome:string;
  preco:number;
}

fetchProduto()
async function fetchProduto() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json'),
        json = await response.json()

  handleProduto(json)
}

function handleProduto(data: Galeria) {
  if ('preco' in data)
    document.body.innerHTML += `
      <p>Nome: ${ data.nome }</p>
      <p>Preço: R$ ${ data.preco + 100 }</p>
    `
}

//unknown
function tentativa(value: unknown) {
  if (typeof value === 'string')
    return value.toUpperCase()

  if (typeof value === 'number')
    return value.toFixed(3)

  if (value instanceof HTMLElement)
    return value.innerText
}

console.log(typeGuard('Origamid'))
console.log(typeGuard(200))
console.log(typeGuard(document.body))
