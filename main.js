// Inserire il nome
var nome_utente = prompt("Nome","Mario");

// Inserire il cognome
var cognome_utente = prompt("Cognome","Rossi");

// Inserire il colore preferito
var colore_preferito = prompt("Colore Preferito","Giallo");

// Inserire le ultime due cifre dell'anno corrente
var data = new Date();
var year = data.getFullYear();
var yearStr = year.toString();
var yearStr2 = yearStr.substr(2);

// Creare la password concatenando i file e aggiungendo un numero
var password_generator = (nome_utente + cognome_utente + colore_preferito + yearStr2);
document.getElementById('password').innerHTML = password_generator;

// visualizzare la password generata assieme al testo di h1
document.getElementById('pwdgen').setAttribute("class", "visible");

//cambiare sfondo in base al colore_preferito inserito dall'utente
if (colore_preferito == "Rosso" || colore_preferito == "rosso") {
    document.getElementById("container").setAttribute("class", "red")
} else if ( colore_preferito == "Blu" || colore_preferito == "blu") {
    document.getElementById("container").setAttribute("class", "blue")
} else if  (colore_preferito == "Verde" || colore_preferito == "verde"){
    document.getElementById("container").setAttribute("class", "green")
} else if  (colore_preferito == "Giallo" || colore_preferito == "giallo"){
    document.getElementById("container").setAttribute("class", "yellow")
} else {
    document.getElementById("container").setAttribute("class", "other")
}
