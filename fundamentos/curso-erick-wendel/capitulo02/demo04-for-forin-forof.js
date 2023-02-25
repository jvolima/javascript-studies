const textoPar = 'par'
const textoImpar = 'impar'

/*for(let index = 0; index <= 10; index ++) {
  const decisao = index % 2 === 0 ? textoPar : textoImpar
  console.log(`O numero ${index} é ${decisao}`) 
}*/

const minhaLista = [
  {
    id: parseInt(Math.random() * 10),
    nome: 'Zezin',
    superPoder: 'Veloz'
  },
  {
    id: Math.random() * 10,
    nome: 'Mariazinha',
    superPoder: 'Super força'
  }
] 

/*for(let index = 0; index < minhaLista.length; index++) {
  const item = minhaLista[index]
  console.log(
    `
    id: ${item.id}
    nome: ${item.nome}
    `
  )
}*/

// não precisa de contador
/*for(const index in minhaLista) {
  const item = minhaLista[index]
  console.log('Nome', item.nome)
}*/

// não precisa do index
for(const item of minhaLista) {
  console.log(item.nome)
}
