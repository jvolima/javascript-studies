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
    this.iconePadrao = './arquivos/default.png'
    this.heroisEscondidos = []
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
    // vamos esperar 1 segundo para mostrar os herois escondidos
    setTimeout(() => {
      this.esconderHerois(copias)
    }, 1000)
  }

  esconderHerois(herois) {
    // vamos trocar a imagem de todos os herois existentes pelo icone padrão
    // usando a sintaxe ({ chave: 1 }) estamos falando que vamos retornar o que estiver dentro do parenteses
    const heroisOcultos = herois.map(({ nome, id }) => ({
      id,
      nome,
      img: this.iconePadrao
    }))
    // atualizar a tela com os herois ocultos
    this.tela.atualizarImagens(heroisOcultos)
    // guardamos os herois para trabalhar com eles depos
    this.heroisEscondidos = heroisOcultos
  }

  jogar() {
    this.embaralhar()
  }
}