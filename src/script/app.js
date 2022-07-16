
document.getElementById('todoContainer').hidden = true // login todo: default, not showing
document.getElementById('sucesslabel').hidden = true // login sucess labelL: default, not showing
document.getElementById('logoutdiv').hidden = true // logout sucess labelL: default, not showing
const login = document.getElementById('login')
const logout = document.getElementById('logout')

function loginfunction(){
  const id = document.getElementById('Username').value
  const pw = document.getElementById('Password').value
  if (id === '' && pw === '') {
    document.getElementById('logindiv').hidden = true
    document.getElementById('logoutdiv').hidden = false
    document.getElementById('todoContainer').hidden = false
  }
}

function logoutfunction(){
  document.getElementById('logindiv').hidden = false
  document.getElementById('logoutdiv').hidden = true
  document.getElementById('todoContainer').hidden = true
}

login.addEventListener('click', loginfunction)
logout.addEventListener('click', logoutfunction)