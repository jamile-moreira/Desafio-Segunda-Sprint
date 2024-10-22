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

let totalSalesValue = 0
let totalReceivedValue = 0
let totalCommissionsValue = 0

document
  .getElementById('registerTransaction')
  .addEventListener('click', function (e) {
    e.preventDefault()

    const transactionAmountField = document.getElementById('transactionAmount')
    const transactionAmount = parseFloat(
      transactionAmountField.value.replace('R$', '').replace(',', '.')
    )

    const paymentMethod = document.getElementById('autoSizingSelect').value
    const paymentMethodText =
      document.getElementById('autoSizingSelect').options[
        document.getElementById('autoSizingSelect').selectedIndex
      ].text

    if (isNaN(transactionAmount) || paymentMethod === 'Selecione') {
      alert(
        'Por favor, insira um valor válido e selecione o método de pagamento.'
      )
      return
    }

    const commissionAmount = transactionAmount * 0.1
    const receivedAmount = transactionAmount * 0.9

    totalSalesValue += transactionAmount
    totalCommissionsValue += commissionAmount
    totalReceivedValue += receivedAmount

    document.getElementById(
      'total-sales'
    ).textContent = `R$ ${totalSalesValue.toFixed(2)}`
    document.getElementById(
      'commissions'
    ).textContent = `R$ ${totalCommissionsValue.toFixed(2)}`
    document.getElementById(
      'received'
    ).textContent = `R$ ${totalReceivedValue.toFixed(2)}`

    const currentDate = new Date().toLocaleString()
    const transaction = {
      date: currentDate,
      method: paymentMethodText,
      amount: transactionAmount.toFixed(2),
    }

    let transactions = JSON.parse(localStorage.getItem('transactions')) || []
    transactions.push(transaction)
    localStorage.setItem('transactions', JSON.stringify(transactions))

    transactionAmountField.value = ''
    document.getElementById('autoSizingSelect').value = 'Selecione'
  })
