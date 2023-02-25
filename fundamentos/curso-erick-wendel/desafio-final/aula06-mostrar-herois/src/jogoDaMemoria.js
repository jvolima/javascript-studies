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
    this.heroisSelecionados = []
  }

  // para usar o this, não podemos usar static!
  inicializar() {
    // vai pegar todas as funções da classe tela!
    // coloca todos os herois na tela
    this.tela.atualizarImagens(this.heroisIniciais)
    // forçar a tela a usar o this de jogo da memoria
    this.tela.configurarBotaoJogar(this.jogar.bind(this))
    this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this))
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

  verificarSelecao(id, nome) {
    const item = { id, nome }
    // vamos verificar a quantidade de herois selecionados
    // e tomar a ação se escolheu certo ou errado
    const heroisSelecionados = this.heroisSelecionados.length
    switch(heroisSelecionados) {
      case 0:
        // adiciona a escolha na lista, esperando pela proxima clicada
        this.heroisSelecionados.push(item)
        break;
      case 1:
        // se a quantidade for 1, signifca que o usuário só pode escolher mais um
        // vamos obter o primeiro item da lista
        const [ opcao1 ] = this.heroisSelecionados
        // zerar itens para não selecionar mais de dois
        this.heroisSelecionados = []
        // conferimos se os nomes e ids batem conforme esperado
        if(opcao1.nome === item.nome && opcao1.id !== item.id) {
          this.exibirHerois(item.nome)
          // como o padrão é true não precisa de parâmetro
          this.tela.exibirMensagem()
          // para a execução
          return
        }

        this.tela.exibirMensagem(false)
        break
    }
  }

  exibirHerois(nomeDoHeroi) {
    // vamos procurar esse heroi pelo nome em nossos heroisIniciais
    // vamos obter somente a imagem dele
    const { img } = this.heroisIniciais.find(({ nome }) => nomeDoHeroi === nome)
    // vamos criar a função na tela, para exibir somente o heroi selecionado
    this.tela.exibirHerois(nomeDoHeroi, img)
  }

  jogar() {
    this.embaralhar()
  }
}