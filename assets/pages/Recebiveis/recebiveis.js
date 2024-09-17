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




document.addEventListener('DOMContentLoaded', () => {
  const currentMonth = '09/2024'; // Mês atual
  let currentDisplayedMonth = '09/2024'; // Mês exibido inicialmente

  const chartContainer = document.getElementById('chart-container');
  const priceVariation = document.getElementById('price-variation'); // Novo retângulo
  const reviewsCard = document.getElementById('reviews'); // Card de avaliações
  const noRecordsMessage = document.getElementById('no-records-message');
  const futureRecordsMessage = document.getElementById('future-records-message');
  const currentMonthSpan = document.getElementById('current-month');
  
  function updateView() {
    if (currentDisplayedMonth === currentMonth) {
      chartContainer.style.display = 'block';
      priceVariation.style.display = 'block'; // Exibe o retângulo no mês 09
      reviewsCard.style.display = 'block'; // Exibe o card de avaliações no mês 09
      noRecordsMessage.style.display = 'none';
      futureRecordsMessage.style.display = 'none';
    } else if (currentDisplayedMonth < currentMonth) {
      chartContainer.style.display = 'none';
      priceVariation.style.display = 'none'; // Oculta o retângulo em meses anteriores
      reviewsCard.style.display = 'none'; // Oculta o card de avaliações em meses anteriores
      noRecordsMessage.style.display = 'block';
      futureRecordsMessage.style.display = 'none';
    } else {
      chartContainer.style.display = 'none';
      priceVariation.style.display = 'none'; // Oculta o retângulo em meses futuros
      reviewsCard.style.display = 'none'; // Oculta o card de avaliações em meses futuros
      noRecordsMessage.style.display = 'none';
      futureRecordsMessage.style.display = 'block';
    }
    currentMonthSpan.textContent = `Mês ${currentDisplayedMonth}`;
  }
  
  document.getElementById('prev-month').addEventListener('click', () => {
    const [month, year] = currentDisplayedMonth.split('/');
    let newMonth = parseInt(month, 10) - 1;
    let newYear = parseInt(year, 10);

    if (newMonth < 1) {
      newMonth = 12;
      newYear -= 1;
    }

    currentDisplayedMonth = `${String(newMonth).padStart(2, '0')}/${newYear}`;
    updateView();
  });

  document.getElementById('next-month').addEventListener('click', () => {
    const [month, year] = currentDisplayedMonth.split('/');
    let newMonth = parseInt(month, 10) + 1;
    let newYear = parseInt(year, 10);

    if (newMonth > 12) {
      newMonth = 1;
      newYear += 1;
    }

    currentDisplayedMonth = `${String(newMonth).padStart(2, '0')}/${newYear}`;
    updateView();
  });

  updateView(); // Inicializa a visualização correta
});

