// console.log("test navigation");

// Variables
const tabNavs = [
    {
        nomPage : "Accueil",
        texte : "index.html"
    },
    {
        nomPage : "Formulaire",
        texte : "formulaire.html",
    },
    {
        nomPage : "À propos",
        texte : "apropos.html"
    }
];


// sélection
const listeNavHTML = document.querySelector("nav");


// fonctions
for (let i = 0; i < tabNavs.length; i++){
    // Exécution pour la navigation
    listeNavHTML.innerHTML += `
        <ul>
            <li>
                <a href="${tabNavs[i].texte}">${tabNavs[i].nomPage}</a>
            </li>
        </ul>`;
}