import _ from 'lodash'
import ClipboardJS from 'clipboard'

const button =  new ClipboardJS('button')

function handleCopy(event: ClipboardJS.Event) {
  console.log(event)
  event.clearSelection()
}
button.on('success', handleCopy)

console.log(_.difference([1, 33], [3, 7, 1]))

interface Produto {
  nome: string;
}

const livro = {
  nome: 'tolkien'
}
