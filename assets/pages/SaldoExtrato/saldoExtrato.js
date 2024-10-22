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

function home(event) {
  event.preventDefault()

  const inicio = document.getElementById('nav-home-tab')

  if (inicio) {
    window.location.href = '../Home/index.html'
  }
}

document.getElementById('nav-home-tab').addEventListener('click', home)

function recebiveis(event) {
  event.preventDefault()

  const receber = document.getElementById('nav-contact-tab')

  if (receber) {
    window.location.href = '../Recebiveis/index.html'
  }
}

document.getElementById('nav-contact-tab').addEventListener('click', recebiveis)

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

window.addEventListener('load', function () {
  // Recupera as transações e o saldo armazenado
  const transactions = JSON.parse(localStorage.getItem('transactions')) || []
  const saldoAtualElement = document.getElementById('saldo')
  const tabelaExtrato = document
    .getElementById('tabela-extrato')
    .getElementsByTagName('tbody')[0]

  let saldoAtual = 0

  // Limpa a tabela de extrato ao recarregar
  while (tabelaExtrato.rows.length > 0) {
    tabelaExtrato.deleteRow(0)
  }

  // Itera sobre as transações e preenche a tabela
  transactions.forEach((transaction) => {
    saldoAtual += parseFloat(transaction.amount)

    const row = tabelaExtrato.insertRow()
    const dataCell = row.insertCell(0)
    const metodoCell = row.insertCell(1)
    const valorCell = row.insertCell(2)

    dataCell.textContent = transaction.date
    metodoCell.textContent = transaction.method
    valorCell.textContent = `R$ ${transaction.amount}`
  })

  // Atualiza o saldo atual com o valor armazenado no localStorage
  const valorRecebidos = localStorage.getItem('valorRecebidos')
  if (valorRecebidos) {
    saldoAtualElement.textContent = `R$ ${parseFloat(valorRecebidos).toFixed(
      2
    )}`
  } else {
    saldoAtualElement.textContent = `R$ ${saldoAtual.toFixed(2)}`
  }
})
