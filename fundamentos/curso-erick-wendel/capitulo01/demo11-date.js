// meses começam do zero
const dataTeste = new Date(2023, 0, 10)
// console.log(dataTeste)

const dataInicio = new Date(0)
// console.log(dataInicio)

const hoje = new Date()
// console.log(hoje.toString())
// console.log(hoje.toLocaleDateString())

// formato global recomendado!
// console.log(hoje.toISOString())

const dia = hoje.getDate()
hoje.setDate(dia + 5) // + 5 dias depois de hoje
hoje.setHours(10, 30, 0)
console.log(`
  Dia: ${hoje.getDate()}
  Mes: ${hoje.getMonth()}
  Ano: ${hoje.getFullYear()}
  Hora: ${hoje.getHours()}
  Minutos: ${hoje.getMinutes()}
  Seconds: ${hoje.getSeconds()}
`)

console.log(
  new Date(2020, 1, 20) > new Date(2000, 1, 20)
)