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
  }
}