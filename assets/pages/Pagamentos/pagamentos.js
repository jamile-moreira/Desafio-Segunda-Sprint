document
  .querySelector('button[type="button"]')
  .addEventListener('click', function (e) {
    e.preventDefault()

    // Capturando os valores dos inputs
    const transactionAmount = parseFloat(
      document
        .querySelector('input[placeholder="R$ 0,00"]')
        .value.replace('R$', '')
        .replace(',', '.')
    )
    const paymentMethod = document.getElementById('autoSizingSelect').value
    const restaurantReceivable = parseFloat(
      document
        .querySelector('input[placeholder="R$ 0,00"]')
        .value.replace('R$', '')
        .replace(',', '.')
    )
    const commissionPercentage = parseFloat(
      document.querySelector('input[type="text"]').value
    )

    // Calculando comissão e valor recebido
    const commissionAmount = transactionAmount * (commissionPercentage / 100)
    const receivedAmount = restaurantReceivable - commissionAmount

    // Atualiza o resumo financeiro
    updateFinancialSummary(
      transactionAmount,
      restaurantReceivable,
      commissionAmount
    )

    // Exibe o resultado
    document.getElementById(
      'transaction-result'
    ).textContent = `Transação registrada com sucesso! Restaurante receberá R$ ${receivedAmount.toFixed(
      2
    )}. Comissão do iFood: R$ ${commissionAmount.toFixed(2)}.`
  })

// Função para atualizar o resumo financeiro
function updateFinancialSummary(
  transactionAmount,
  restaurantReceivable,
  commissionAmount
) {
  // Aqui você pode armazenar os valores e fazer o update na tela, conforme necessário
  document.querySelector(
    'td:nth-child(2)'
  ).textContent = `R$ ${transactionAmount.toFixed(2)}`
}

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
