function sair(event) {
  event.preventDefault()

  const deslogar = document.getElementById('btnSair')

  if (deslogar) {
    window.location.href = '../../../index.html'
  }
}

document.getElementById('btnSair').addEventListener('click', sair)

function pagamentos(event) {
  event.preventDefault()

  const pagar = document.getElementById('nav-profile-tab')

  if (pagar) {
    window.location.href = '../Pagamentos/index.html'
  }
}

document.getElementById('nav-profile-tab').addEventListener('click', pagamentos)

function recebiveis(event) {
  event.preventDefault()

  const receber = document.getElementById('nav-disabled-tab')

  if (receber) {
    window.location.href = '../Recebiveis/index.html'
  }
}

document
  .getElementById('nav-disabled-tab')
  .addEventListener('click', recebiveis)
