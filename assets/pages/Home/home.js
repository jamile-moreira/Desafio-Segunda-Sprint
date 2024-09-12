function sair(event) {
  event.preventDefault()

  const deslogar = document.getElementById('btnSair')

  if (deslogar) {
    window.location.href = '../../../index.html'
  }
}

document.getElementById('btnSair').addEventListener('click', sair)
