//as
const videos = document.querySelector('.player') as HTMLVideoElement

// erro runtime, não existe volume de null
// video.volume;

// // erro TS, possíveis dados devem ser compatíveis com Element | null
// const link = document.querySelector('.link') as string;

//any
interface Galeria {
  nome: string;
  preco: number;
}

async function fetichGaleria() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json'),
        json = response.json() as Promise<Galeria>
}

//non-null-operator
const video = document.querySelector("video")

// erro runtime, não existe volume de null
// video.volume;

// erro runtime
document.querySelector('a')!.href = 'https://www.origamid.com';

//outras sintaxes
const video1 = document.querySelector('.player') as HTMLVideoElement;
const video2 = <HTMLVideoElement>document.querySelector('.player');
const video3 = document.querySelector<HTMLVideoElement>('.player');
const video4 = document.querySelector('.player');

// video1.volume;
// video2.volume;
// video3?.volume;
// (video4 as HTMLVideoElement).volume;

//destructuring
const { body }: { body: HTMLElement } =  document

function handleData({ nome, preco }: { nome: string; preco: number; }) {
  nome.includes('livros')
  preco.toFixed(2)
}

handleData({
  nome: 'Notebook',
  preco: 2000,
})

//conhecer dados
function handleClick({
  currentTarget,
  pageX,
}: {
  currentTarget: EventTarget | null
  pageX: number
}) {
  if (currentTarget instanceof HTMLElement)
    currentTarget.innerHTML = `<h1>Mouse em x: ${ pageX }</h1>`
}

document.documentElement.addEventListener('click', handleClick)

//rest
function comparar(tipo: 'maior' | 'menor', ...numeros: number[]) {
  if (tipo === 'maior')
    return Math.max(...numeros)

  if (tipo === 'menor') 
    return Math.min(...numeros)
}

console.log(comparar('maior', 3, 2, 4, 30))
console.log(comparar('menor', 3, 4, 5, 40))

//intersection
type Produto = {
  preco: number;
};

type Carro = {
  rodas: number;
  portas: number;
};

function handleProdutoCarro(dados: Carro & Produto) {
  dados.rodas;
  dados.portas;
  dados.preco;
}

handleProdutoCarro({
  preco: 20000,
  rodas: 4,
  portas: 5,
});

/////
//adicionar propriedades
// Com Interface
interface InterfaceCarro {
  rodas: number;
  portas: number;
}

interface InterfaceCarro {
  preco: number;
}

const dado1: InterfaceCarro = {
  preco: 20000,
  rodas: 4,
  portas: 5,
};

// Com Type
type TipoCarro = {
  rodas: number;
  portas: number;
};

type TipoCarroComPreco = TipoCarro & {
  preco: number;
};

const dado2: TipoCarroComPreco = {
  preco: 20000,
  rodas: 4,
  portas: 5,
};

//////
//window
interface Window {
  userId: number;
}

window.userId = 200;
console.log(window.userId);

// 1 - Crie uma interface UserData para o formulário abaixo
// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
// 3 - Adicione um evento de keyup ao formulário
// 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
// 5 - Salve UserData no localStorage
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData

interface Window {
  UserData: any;
}

window.UserData = {};

function validJSON(str: string) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

interface UserData {
  nome?: string;
  email?: string;
  cpf?: string;
}

function isUserData(obj: unknown): obj is UserData {
  if (
    obj &&
    typeof obj === 'object' &&
    ('nome' in obj || 'email' in obj || 'cpf' in obj)
  ) {
    return true;
  } else {
    return false;
  }
}

function loadLocalStorage() {
  const localUserData = localStorage.getItem('UserData');
  if (localUserData && validJSON(localUserData)) {
    const UserData = JSON.parse(localUserData);
    if (isUserData(UserData)) {
      Object.entries(UserData).forEach(([key, value]) => {
        const input = document.getElementById(key);
        if (input instanceof HTMLInputElement) {
          input.value = value;
          window.UserData[key] = value;
        }
      });
    }
  }
}

loadLocalStorage();

function handleInput({ target }: KeyboardEvent) {
  if (target instanceof HTMLInputElement) {
    window.UserData[target.id] = target.value;
    localStorage.setItem('UserData', JSON.stringify(window.UserData));
  }
}

const form = document.querySelector<HTMLElement>('#form');
form?.addEventListener('keyup', handleInput);

