let totalReceived = 0

document
  .getElementById('payment-form')
  .addEventListener('submit', function (e) {
    e.preventDefault()

    const amount = parseFloat(document.getElementById('amount').value)
    totalReceived += amount

    document.getElementById('total-received').textContent =
      totalReceived.toFixed(2)
    document.getElementById('payment-form').reset()
  })
