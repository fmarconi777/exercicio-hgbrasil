const url = 'https://api.hgbrasil.com/finance?format=json-cors&chave=492e400b'
const cotacoes = {}
const inputSeletor = document.querySelector('#moeda')
const botao = document.querySelector('#botao')
const valor = document.getElementById('valor')
const inserir = document.getElementById('inserir')
let moeda
let valorInput

async function getCotacoes() {
  const resposta = await (await fetch(url)).json()
  const currencies = resposta.results.currencies
  Object.values(currencies).forEach(objeto => (objeto.name ? cotacoes[objeto.name] = objeto.buy: false))
  adicionaSelecao()
}

window.addEventListener('load', function() {
  getCotacoes()
})


botao.addEventListener('click', function() {
  moeda = inputSeletor.value
  valorInput = valor.value
  const resposta = valorInput / cotacoes[moeda]
  inserir.textContent = resposta
})

function adicionaSelecao() {
  const array = Object.keys(cotacoes)
  for (chave in array) {
    let option = document.createElement('option')
    option.setAttribute('value', array[chave])
    option.textContent = array[chave]
    inputSeletor.appendChild(option)
  }
}
