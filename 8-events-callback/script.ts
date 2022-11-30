//event
const button = document.querySelector(".kiefer")

function handleClick(click: MouseEvent) {
  console.log(click.pageX, 'sutherland')
}

if (button instanceof HTMLElement)
  button.addEventListener('click', handleClick)

window.addEventListener('scroll', handlePage)
function handlePage(e: Event) {
  console.log(e)
}

//event and instanceof
function ativaContainer(container: Event) {
  console.log(container.type, 'miles')

  if (container instanceof MouseEvent)
    console.log(container.pageX)

  if (container instanceof TouchEvent)
    console.log(container.touches[0].pageX)
}

document.documentElement.addEventListener('mousedown', ativaContainer)
document.documentElement.addEventListener('touchstart', ativaContainer)
document.documentElement.addEventListener('pointerdown', ativaContainer)

//this
// function chasingInTheRain(this: HTMLButtonElement, e: MouseEvent) {
//   console.log(this.innerText)
// }

// button?.addEventListener('mouseover', chasingInTheRain)

//target e currentTarget
function down(e: Event) {
  const elemento = e.currentTarget

  if (elemento instanceof HTMLElement)
    elemento.style.background = 'green'
}

button?.addEventListener('mouseout', down)

// Estado dos elementos

// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button

// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event: PointerEvent) {
  const button = event.currentTarget;
  const nav = document.getElementById('nav');
  if (button instanceof HTMLElement && nav) {
    const active = nav.classList.contains('active');
    if (active) {
      nav.classList.remove('active');
      nav.style.background = 'orange'
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'Abrir Menu');
    } else {
      nav.classList.add('active');
      nav.style.background = 'green'
      button.setAttribute('aria-expanded', 'true');
      button.setAttribute('aria-label', 'Fechar Menu');
    }
  }
}

btnMobile?.addEventListener('pointerdown', toggleMenu)
