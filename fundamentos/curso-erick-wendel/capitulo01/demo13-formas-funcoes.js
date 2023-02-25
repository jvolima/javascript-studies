function minhaFuncao1() {
  return 'eeeeeeee'
}

const minhaFuncao2 = function() {
  return 'aaaaaaaaaa'
}

const minhaFuncao3 = () => {
  return 'oooooooo'
}

const minhaFuncao4 = parametro1 => `eba ${parametro1}`

const ob1 = {
  minhaFuncao: parametro1 => `uou ${parametro1}`
}

console.log(ob1.minhaFuncao('juao'))

const ob2 = {
  minhaFuncao (parametro1) {
    return `la ele ${parametro1}`
  }
}

console.log(ob2.minhaFuncao('rapaiz'))