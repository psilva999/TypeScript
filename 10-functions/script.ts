//function
function somar(a: number, b: number, c?: number): number {
  return a + b * (c ? c : 0)
}

console.log(somar(3, 4))
console.log(somar(5, 4, 3))

const subtrair = (a: number, b: number): number => a - b

console.log(subtrair(12, 13))

type Callback = (event: MouseEvent) => void

function palavras(a: string, b?: string): string {
  return `Uma oferta de ${ a } vem de: ${ b? b : a }`
}

console.log(palavras('Emprego', 'Floripa'))

//void
function pati(value: any) {
  if (typeof value === 'string')
    return true
}

if (pati('vem'))
  console.log(pati('ta ali'))

//never
// function abort(mensagem: string): never {
//   throw new Error(mensagem)
// }

// abort('error')
// console.log('tetando')

//overload
interface Quadrado {
  lado: number;
  perimetro(lado: number): number;
}

function calcula(forma: Quadrado) {  }

function normalizar(valor: string): string;
function normalizar(valor: string[]): string[];
function normalizar(valor: string | string[]): string | string[] {
  if (typeof valor === 'string')
    return valor.trim().toUpperCase()

  else 
    return valor.map(item => item.trim().toLowerCase())
}

console.log(normalizar('produtos'))
console.log(normalizar(['maçã', 'pera']))

//exemplo 2
function $(seletor: 'video'): HTMLVideoElement | null
function $(seletor: 'div'): HTMLDivElement | null
function $(seletor: 'a'):HTMLAnchorElement | null
function $(seletor: string): Element | null
function $(seletor: string): Element | null {
  return document.querySelector(seletor)
}

console.log($('a')?.href)
console.log($('video')?.volume)
console.log($('.vem')?.innerHTML)

//exercicio
// Crie uma função que arredonda um valor passado para cima.
// A função pode receber string ou number.
// A função deve retornar o mesmo tipo que ela receber.
function arredondar(valor: string): string;
function arredondar(valor: number): number;
function arredondar(valor: string | number): string | number {
  if (typeof valor === 'number') 
    return Math.ceil(valor)

  else 
    return Math.ceil(Number(valor)).toString()
}

console.log(arredondar(130.32))
console.log(arredondar('394.55'))
