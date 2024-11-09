// Simulazione di credenziali
const validUsername = "utente";
const validPassword = "password";

// Funzione di login
function login(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (username === validUsername && password === validPassword) {
        window.location.href = "static.html";
    } else {
        errorMessage.textContent = "Credenziali non valide. Riprova.";
    }
}

// Testo che cambia periodicamente
const texts = [
    "Benvenuto nella nostra pagina!",
    "Siamo felici di averti qui.",
    "Goditi la tua visita!",
    "Esplora e scopri nuove cose."
];
let textIndex = 0;

function changeText() {
    const dynamicText = document.getElementById("dynamicText");
    dynamicText.textContent = texts[textIndex];
    textIndex = (textIndex + 1) % texts.length;
}

// Cambia il testo ogni 3 secondi
if (window.location.pathname.includes("static.html")) {
    setInterval(changeText, 3000);
}
