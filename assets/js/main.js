function login(event) {
  event.preventDefault()

  const user = document.getElementById('userInput').value
  const password = document.getElementById('passInput').value

  const errorUser = document.getElementById('errorUser')
  const errorPass = document.getElementById('errorPass')

  if (!user) {
    errorUser.style.display = 'block'
  } else {
    errorUser.style.display = 'none'
  }

  if (!password) {
    errorPass.style.display = 'block'
  } else {
    errorPass.style.display = 'none'
  }

  if (user && password) {
    window.location.href = './assets/pages/Home/index.html'
  }
}
