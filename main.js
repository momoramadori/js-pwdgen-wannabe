//inserire il nome
var nome_utente = prompt("Nome")

// Inserire il cognome
var cognome_utente = prompt("Cognome")

// Inserire il colore preferito
var colore_preferito = prompt("Colore prefeito")

// visualizzare la password generata
var password_generator = (nome_utente + cognome_utente + colore_preferito + "20")
document.getElementById('password').innerHTML = password_generator
document.getElementById('pwdgen').setAttribute("class", "visible")
