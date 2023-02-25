// metodos estaticos nao podem utilizar o this
// por isso, nao vamos colocar o util o construtor
const util = Util

const ID_CONTEUDO = 'conteudo'
const ID_BTN_JOGAR = 'jogar'
const ID_MENSAGEM = 'mensagem'
const CLASSE_INVISIVEL = 'invisible'
const ID_CARREGANDO = 'carregando'
const ID_CONTADOR = 'contador'
const ID_BTN_MOSTRAR_TUDO = 'mostrarTudo'
const MENSAGENS = {
  sucesso: {
    text: 'Combinação correta!',
    classe: 'alert-success'
  },
  erro: {
    text: 'Combinação incorreta!',
    classe: 'alert-danger'
  }
}
class Tela {
  static obterCodigoHtml(item) {
    return `
      <div class="col-md-3">
        <div class="card" style="width: 50%;" onclick="window.verificarSelecao('${item.id}', '${item.nome}')">
          <img src="${item.img}" name="${item.nome}" class="card-img-top" alt="...">
        </div>
        <br />
      </div>
    `
  }

  static alterarConteudoHtml(codigoHtml) {
    const conteudo = document.getElementById(ID_CONTEUDO)
    conteudo.innerHTML = codigoHtml
  }

  static gerarStringHtmlPelaImagem(itens) {
    // para cada item da lista, vai executar a função obterCodigoHtml
    // ao final, vai concatenar tudo em uma unica string, dessa forma gerando o Html final
    return itens.map(Tela.obterCodigoHtml).join('')
  }

  static atualizarImagens(itens) {
    const codigoHtml = this.gerarStringHtmlPelaImagem(itens)
    Tela.alterarConteudoHtml(codigoHtml)
  }

  static configurarBotaoJogar(funcaoOnClick) {
    const btnJogar = document.getElementById(ID_BTN_JOGAR)
    btnJogar.onclick = funcaoOnClick
  }
  
  static configurarBotaoVerificarSelecao(funcaoOnClick) {
    window.verificarSelecao = funcaoOnClick
  }

  static exibirHerois(nomeDoHeroi, img) {
    const elementosHtml = document.getElementsByName(nomeDoHeroi)
    // para cada elemento encontrado na tela, nós iremos alterar o src dele
    elementosHtml.forEach(item => (item.src = img))
  }

  static async exibirMensagem(sucesso = true) {
    const elemento = document.getElementById(ID_MENSAGEM)
    if(sucesso) {
      elemento.classList.remove(MENSAGENS.erro.classe)
      elemento.classList.add(MENSAGENS.sucesso.classe)
      elemento.innerText = MENSAGENS.sucesso.text
    } else {
      elemento.classList.remove(MENSAGENS.sucesso.classe)
      elemento.classList.add(MENSAGENS.erro.classe)
      elemento.innerText = MENSAGENS.erro.text
    }

    elemento.classList.remove(CLASSE_INVISIVEL)
    await util.timeout(1000)
    elemento.classList.add(CLASSE_INVISIVEL)
  }

  static exibirCarregando(mostrar = true) {
    const carregando = document.getElementById(ID_CARREGANDO)
    if (mostrar) {
      carregando.classList.remove(CLASSE_INVISIVEL)
      return
    }
    carregando.classList.add(CLASSE_INVISIVEL)
  }

  static iniciarContador() {
    let contarAte = 3
    const elementoContador = document.getElementById(ID_CONTADOR)
    // vamos substituir o texto Começando $$contador segundos
    // onde está o $$contador adicionaremos o valor
    const identificadorNoTexto = "$$contador"
    const textoPadrao = `Começando em ${identificadorNoTexto} segundos...`
    // vamos criar uma função em linha para atualizar o texto a cada segundo
    const atualizarTexto = () => 
    (elementoContador.innerHTML = textoPadrao.replace(identificadorNoTexto, contarAte--))

    atualizarTexto()
    // a cada segundo vai chamar a função atualizarTexto, essa função
    // vai substituir o $$contador pelo `contarAte`, diminuindo a cada vez que entra na função
    const idDoIntervalo = setInterval(atualizarTexto, 1000)
    return idDoIntervalo
  }

  static limparContador(idDoIntervalo) {
    clearInterval(idDoIntervalo)
    // deixamos sem texto
    document.getElementById(ID_CONTADOR).innerHTML = ""
  }

  static configurarBotaoMostrarTudo(funcaoOnClick) {
    const btnMostrarTudo = document.getElementById(ID_BTN_MOSTRAR_TUDO)
    btnMostrarTudo.onclick = funcaoOnClick
  }
}