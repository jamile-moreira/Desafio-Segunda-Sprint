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

  document.getElementById('transaction-result').textContent = 
    `Transação registrada com sucesso! Restaurante receberá R$ ${receivedAmount.toFixed(2)}. Comissão do iFood: R$ ${commissionAmount.toFixed(2)}.`;
});

let totalSales = 0;
let pendingReceivables = 0;
let received = 0;
let commissions = 0;

// Função para atualizar o resumo financeiro
function updateFinancialSummary(transactionAmount, restaurantReceivable, commissionAmount) {
  totalSales += transactionAmount;
  pendingReceivables += restaurantReceivable;
  commissions += commissionAmount;

  document.getElementById('total-sales').textContent = `R$ ${totalSales.toFixed(2)}`;
  document.getElementById('pending-receivables').textContent = `R$ ${pendingReceivables.toFixed(2)}`;
  document.getElementById('received').textContent = `R$ ${received.toFixed(2)}`;
  document.getElementById('commissions').textContent = `R$ ${commissions.toFixed(2)}`;
}

// Função para sair
function sair(event) {
  event.preventDefault();
  const deslogar = document.getElementById('btnSair');
  if (deslogar) {
      window.location.href = '../../../index.html';
  }
}

document.getElementById('btnSair').addEventListener('click', sair);

// Função para navegação Recebíveis
function recebiveis(event) {
  event.preventDefault();
  const receber = document.getElementById('nav-contact-tab');
  if (receber) {
      window.location.href = '../Recebiveis/index.html';
  }
}

document.getElementById('nav-contact-tab').addEventListener('click', recebiveis);

// Função para navegação Home
function home(event) {
  event.preventDefault();
  const inicio = document.getElementById('nav-home-tab');
  if (inicio) {
      window.location.href = '../Home/index.html';
  }
}

document.getElementById('nav-home-tab').addEventListener('click', home);

// Função para navegação Saldo e Extrato
function saldoExtrato(event) {
  event.preventDefault();
  const consultar = document.getElementById('nav-disabled-tab');
  if (consultar) {
      window.location.href = '../SaldoExtrato/index.html';
  }
}

document.getElementById('nav-disabled-tab').addEventListener('click', saldoExtrato);
