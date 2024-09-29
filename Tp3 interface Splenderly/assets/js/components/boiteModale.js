// Variables

// Selections
const modaleHTML = document.querySelector(".modale-conteneur");
const boutonHTML = document.querySelector(".fermer-modale");

// Fonctions

// permettre de fermer la boite modale
export function init() {
    boutonHTML.addEventListener("click", cacherModale);
    cacherModale();
}

// permettre d'afficher la boite modale
export function afficherModale() {
    modaleHTML.classList.remove("invisible");
}

// pemettre de cacher la boite modale
function cacherModale() {
    modaleHTML.classList.add("invisible");
}

// Execution
// init();