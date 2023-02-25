const fs = require('fs')
/*fs.readFile('./arq1.txt', (error, response) => {
  if (error) {
    console.error('Deu ruim***', error.stack)
    return
  }

  console.log('resposta', response.toString())
})*/

fs.readFile('./arq1.txt', (errorArq1, responseArq1) => {
  if (errorArq1) {
    console.error('Deu ruim***', errorArq1.stack)
    return
  }

  fs.readFile('./arq2.txt', (errorArq2, responseArq2) => {
    if (errorArq2) {
      console.error('Deu ruim***', errorArq2.stack)
      return
    }

    fs.readFile('./arq3.txt', (errorArq3, responseArq3) => {
      if (errorArq3) {
        console.error('Deu ruim***', errorArq3.stack)
        return
      }

      const conteudo = `${responseArq1}\n${responseArq2}\n${responseArq3}`
      fs.writeFile('./final.txt', conteudo, (errorWrite, responseWrite) => {
        if (errorWrite) {
          console.error('Deu ruim na gravação', errorWrite)
          return
        }
        console.log('Arquivo salvo com sucesso!')
      })
    })
  })
})