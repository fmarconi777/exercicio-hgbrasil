const url = 'https://api.hgbrasil.com/finance?format=json-cors&chave=492e400b'
const cotacoes = {}
const inputSeletor1 = document.querySelector('#moeda1')
const inputSeletor2 = document.querySelector('#moeda2')
let valor = document.getElementById('valor')
let inserir = document.getElementById('inserir')
let moedaAtual
let moedaConversao

window.addEventListener('load', function() {
  getCotacoes()
})

async function getCotacoes() {
  const resposta = await (await fetch(url)).json()
  const currencies = resposta.results.currencies
  Object.values(currencies).forEach(objeto => (objeto.name ? cotacoes[objeto.name] = objeto.buy: false))
  adicionaSelecao1()
  adicionaSelecao2()
}

adicionaSelecao1.addEventListener('change', function() {
  moedaAtual = this.selectIndex
})

function adicionaSelecao1() {
  const array = Object.keys(cotacoes)
  for (chave in array) {
    let option = document.createElement('option')
    option.setAttribute('value', (+chave + 1))
    option.textContent = array[chave]
    inputSeletor1.appendChild(option)
  }
}

function adicionaSelecao2() {
  const array = Object.keys(cotacoes)
  for (chave in array) {
    let option = document.createElement('option')
    option.setAttribute('value', chave)
    option.textContent = array[chave]
    inputSeletor2.appendChild(option)
  }
}