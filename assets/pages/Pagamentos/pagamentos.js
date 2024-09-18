document.getElementById('transaction-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const transactionAmount = parseFloat(document.getElementById('transaction-amount').value);
  const paymentMethod = document.getElementById('payment-method').value;
  const restaurantReceivable = parseFloat(document.getElementById('restaurant-receivable').value);
  const commissionPercentage = parseFloat(document.getElementById('commission').value);
  const commissionAmount = transactionAmount * (commissionPercentage / 100);
  
  const receivedAmount = restaurantReceivable - commissionAmount;

  // Atualiza o resumo financeiro
  updateFinancialSummary(transactionAmount, restaurantReceivable, commissionAmount);

  document.getElementById('transaction-result').textContent = `Transação registrada com sucesso! Restaurante receberá R$ ${receivedAmount.toFixed(2)}. Comissão do iFood: R$ ${commissionAmount.toFixed(2)}.`;
});

let totalSales = 0;
let pendingReceivables = 0;
let received = 0;
let commissions = 0;

function updateFinancialSummary(transactionAmount, restaurantReceivable, commissionAmount) {
  totalSales += transactionAmount;
  pendingReceivables += restaurantReceivable;
  commissions += commissionAmount;

  document.getElementById('total-sales').textContent = `R$ ${totalSales.toFixed(2)}`;
  document.getElementById('pending-receivables').textContent = `R$ ${pendingReceivables.toFixed(2)}`;
  document.getElementById('received').textContent = `R$ ${received.toFixed(2)}`;
  document.getElementById('commissions').textContent = `R$ ${commissions.toFixed(2)}`;
}
