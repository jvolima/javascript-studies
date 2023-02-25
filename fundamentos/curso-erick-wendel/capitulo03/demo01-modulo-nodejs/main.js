const Matematica = require('./matematica')
//console.log(Matematica.somar(1,4))
const readline = require('readline')
const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

terminal.question('Insira o primeiro valor ', valor1 => {
  terminal.question('Insira o segundo valor ', valor2 => {
    terminal.question('Insira a operação ', tipoOperacao => {
      const resultado = Matematica[tipoOperacao](
        Number(valor1), Number(valor2)
      )
      console.log(`O resultado da operação de ${tipoOperacao} entre ${valor1} e ${valor2} é: ${resultado}`)
      terminal.close()
    })
  })
})