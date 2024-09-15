// let totalReceived = 0

// document
//   .getElementById('payment-form')
//   .addEventListener('submit', function (e) {
//     e.preventDefault()

//     const amount = parseFloat(document.getElementById('amount').value)
//     totalReceived += amount

//     document.getElementById('total-received').textContent =
//       totalReceived.toFixed(2)
//     document.getElementById('payment-form').reset()
//   })

function sair(event) {
  event.preventDefault()

  const deslogar = document.getElementById('btnSair')

  if (deslogar) {
    window.location.href = '../../../index.html'
  }
}

document.getElementById('btnSair').addEventListener('click', sair)

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
