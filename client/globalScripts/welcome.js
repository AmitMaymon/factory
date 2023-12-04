let info = localStorage.getItem('token')
info = JSON.parse(info)
const welcome = document.getElementById('welcome')
welcome.innerText = `Welcome ${info.name}`
