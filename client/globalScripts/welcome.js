
let info = localStorage.getItem('token')
if (!info) {
    directToLogin()
}
info = JSON.parse(info)
const welcome = document.getElementById('welcome')
const h4 = document.createElement('h4')
h4.innerText = `Welcome ${info.name}`
let btn = document.createElement('button')

btn.innerText = 'Log Out'
btn.id = 'log-button'
btn.onclick = () => {
    localStorage.removeItem('token')
    directToLogin()


}

welcome.append(btn)
welcome.append(h4)



function directToLogin() {
    if (window.location.pathname.includes('employee') || window.location.pathname.includes('department')) {
        window.location.href = '../login.html'
        return
    }
    window.location.href = './login.html'


}