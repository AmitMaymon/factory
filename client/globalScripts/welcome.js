let info = localStorage.getItem('token')
info = JSON.parse(info)
const welcome = document.getElementById('welcome')
const h4 = document.createElement('h4')
h4.innerText = `Welcome ${info.name}`
let btn = document.createElement('button')

btn.innerText = 'Log Out'
btn.id ='log-button'
btn.onclick = ()=>{
    localStorage.removeItem('token')
    window.location.href = './login.html'

}

welcome.append(btn)
welcome.append(h4)

