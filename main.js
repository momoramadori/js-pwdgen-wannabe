//inserire il nome
var nome_utente = prompt("Nome");

// Inserire il cognome
var cognome_utente = prompt("Cognome");

// Inserire il colore preferito
var colore_preferito = prompt("Colore Preferito");

// visualizzare la password generata
var password_generator = (nome_utente + cognome_utente + colore_preferito + "20");
document.getElementById('password').innerHTML = password_generator;
document.getElementById('pwdgen').setAttribute("class", "visible");

//cambiare sfondo in base al colore inserito
if (colore_preferito == "Rosso" || colore_preferito == "rosso") {
    document.getElementById("container").setAttribute("class", "red")
} else if ( colore_preferito == "Blu" || colore_preferito == "blu") {
    document.getElementById("container").setAttribute("class", "blue")
} else if  (colore_preferito == "Verde" || colore_preferito == "verde"){
    document.getElementById("container").setAttribute("class", "green")
} else {
    document.getElementById("container").setAttribute("class", "other")
}
