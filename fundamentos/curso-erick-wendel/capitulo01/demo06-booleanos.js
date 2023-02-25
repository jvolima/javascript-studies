const poderDirigir = true
if (poderDirigir) {
  console.log('Ela pode dirigir')
}

const saldoEmConta = 0
if (!saldoEmConta) {
  console.log('não tem saldo!')
}

// !! força o valor a true ou false de acordo com o valor da tabela de falsies e truths
const boolComString = 'João'
console.log('boolComString', !!boolComString)

// negação
console.log('negação', !boolComString)

// negação + forçar a bool
console.log(
  'negação + forçar a bool',
  ! (!!boolComString)
)