function sair(event) {
  event.preventDefault()

  const deslogar = document.getElementById('btnSair')

  if (deslogar) {
    window.location.href = '../../../index.html'
  }
}

document.getElementById('btnSair').addEventListener('click', sair)

function sair(event) {
  event.preventDefault()

  const deslogar = document.getElementById('btnSair')

  if (deslogar) {
    window.location.href = '../../../index.html'
  }
}

function recebiveis(event) {
  event.preventDefault()

  const receber = document.getElementById('nav-contact-tab')

  if (receber) {
    window.location.href = '../Recebiveis/index.html'
  }
}

document.getElementById('nav-contact-tab').addEventListener('click', recebiveis)

function home(event) {
  event.preventDefault()

  const inicio = document.getElementById('nav-home-tab')

  if (inicio) {
    window.location.href = '../Home/index.html'
  }
}

document.getElementById('nav-home-tab').addEventListener('click', home)
function saldoExtrato(event) {
  event.preventDefault()

  const consultar = document.getElementById('nav-disabled-tab')

  if (consultar) {
    window.location.href = '../SaldoExtrato/index.html'
  }
}

document
  .getElementById('nav-disabled-tab')
  .addEventListener('click', saldoExtrato)

