class JogoDaMemoria {
  constructor({ tela }) {
    this.tela = tela
    // caminho de arquivos sempre relativo ao index html
    this.heroisIniciais = [
      { img: './arquivos/batman.png', nome: 'batman' },
      { img: './arquivos/cyclope.png', nome: 'cyclope' },
      { img: './arquivos/mulher-maravilha.png', nome: 'mulher-maravilha' },
      { img: './arquivos/flash.png', nome: 'flash' }
    ]
  }

  // para usar o this, não podemos usar static!
  inicializar() {
    // vai pegar todas as funções da classe tela!
    // coloca todos os herois na tela
    this.tela.atualizarImagens(this.heroisIniciais)
    // forçar a tela a usar o this de jogo da memoria
    this.tela.configurarBotaoJogar(this.jogar.bind(this))
  }

  embaralhar() {
    const copias = this.heroisIniciais
    .concat(this.heroisIniciais) // duplicar herois
    .map(item => {
      return Object.assign({}, item, { id: Math.random() / 0.5 })
    }) // entrar em cada um e gerar um id aleatorio
    .sort(() => Math.random() - 0.5) // gerar uma ordem aleatoria

    this.tela.atualizarImagens(copias)
  }

  jogar() {
    this.embaralhar()
  }
}