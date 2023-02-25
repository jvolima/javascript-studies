const minhaLista = []
const minhaListaDeTarefas = [
  'Dar comida para o cachorro',
  'Ler Dom Quixote',
  'Escovar os dentes'
]

// console.log(minhaListaDeTarefas[0])
// console.log(minhaListaDeTarefas[1])
// console.log(minhaListaDeTarefas[5])

// quantidade de itens no array
// console.log(minhaListaDeTarefas.length)

// adicionar item
minhaListaDeTarefas.push('Formatar computador')
// console.log(minhaListaDeTarefas)

// remover último da lista
// const ultimo = minhaListaDeTarefas.pop()
// console.log(ultimo, minhaListaDeTarefas)

// remover primeiro da lista
// const primeiro = minhaListaDeTarefas.shift()
// console.log(primeiro, minhaListaDeTarefas)

// remover um item especifico a partir de um indice
// console.log(minhaListaDeTarefas[2])
// splice(x, y) x = item de inicio y = quantidade a ser removida
// minhaListaDeTarefas.splice(2, 1)
// console.log(minhaListaDeTarefas)

const itens = [
  1, 'computador', 0.22
]

// verificar o tipo do array
// console.log(typeof itens)

// verificar se é array
// console.log(Array.isArray(itens))

// ordenar
// const numeros = ['c', 'x', 'z', 'a', 'd']
// console.log(numeros.sort())

// juntar dois arrays
// const novo = itens.concat([1, 2, 3])
// console.log(novo)

// juntar arrays em uma string
// console.log(itens.join(', '))

// verificar indice do item 
const index = itens.indexOf('computador')
console.log(itens[index])