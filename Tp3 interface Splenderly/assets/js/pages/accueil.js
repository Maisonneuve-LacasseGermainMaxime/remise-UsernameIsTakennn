// import {init as initModeNuit} from "../components/modeNuit.js"

// Variables
const consolesNintendo = [
    {
        id: 1,
        image: "assets/img/nintendo-nes.jpg",
        nom: "NES",
        prix: 300,
        description:
        "Version miniaturisée de la novatrice NES de Nintendo. La Nintendo Entertainment System (NES) est une console de jeux vidéo 8 bits."
    },
    {
        id: 2,
        image: "assets/img/nintendo-gameboy.jpg",
        nom: "Gameboy",
        prix: 90,
        description: "Première console portable de Nintendo qui propose des cartouches ROM interchangeables pour chaque jeu."
    },
    {
        id: 3,
        image: "assets/img/nintendo-ds.jpg",
        nom: "DS",
        prix: 140,
        description: "Console portable de Nintendo qui se distingue visiblement par sa conception horizontale à clapet et la présence de deux écrans, dont le plus bas fait office d'écran tactile."
    },
    {
        id: 4,
        image: "assets/img/nintendo-3ds.jpg",
        nom: "3DS",
        prix: 180,
        description:
        "Console portable de Nintendo avec un écran inférieur qui est un écran tactile, un écran supérieur qui est un écran large et un LCD 3D autostéréoscopique."
    },
    {
        id: 5,
        image: "assets/img/nintendo-switch.jpg",
        nom: "Switch",
        prix: 215,
        description:
        "Console hybride de Nintendo avec deux manettes sans fil détachables appelées Joy-Con et l'écran de la console peut être insérée dans la station d'accueil Nintendo Switch à l'aide d'une ancrée attachée à un téléviseur."
    },
];

// sélection
const boutonTriAsc = document.querySelector(".tri-asc");
const boutonTriDesc = document.querySelector(".tri-desc");

const boutonFiltreAsc = document.querySelector(".filtre");

const listeConsolesHTML = document.querySelector(".liste-console");

const listeDetailConsolesHTML = document.querySelector(".item-presentation");


// fonctions
function init() {
    afficherListeProduits(consolesNintendo);
    // initModeNuit();

    // click sur le bouton "prix en ordre croissant"
    boutonFiltreAsc.addEventListener("click", function () {
        FiltrerPrixCroissant(consolesNintendo, "asc");
    });

    // click sur le bouton "ordre alphabétique de A-Z"
    boutonTriAsc.addEventListener("click", function () {
        trier(consolesNintendo, "asc");
    });

    // click sur le bouton "ordre alphabétique de Z-A"
    boutonTriDesc.addEventListener("click", function () {
        trier(consolesNintendo, "desc");
    });
}


// Pour afficher la liste ds consoles
function afficherListeProduits(tabConsole) {
    viderListe();

    // boucle tableau consoles
    tabConsole.forEach(function (console) {
        // template pour la div "liste-console"
        let gabarit = `
            <div>
                <img class = "liste-console_image" src="${console.image}" alt="">
                <br><p class = "liste-console_nom">${console.nom}</p>
                <br>${console.prix}<span>$</span>
            </div>`;

        // insertion du template/gabarit dans le HTML
        listeConsolesHTML.insertAdjacentHTML("beforeend", gabarit);

        let ajoutElement = listeConsolesHTML.lastElementChild;
        ajoutElement.addEventListener("click", function () {
            afficherDetail(console);
        });
    });
}


// Pour filtrer les prix en ordre croissant
function FiltrerPrixCroissant(tableau, direction) {
    // step 1 : ctrl + c && step 2 : ctrl + v
    let copie = [...tableau];

    // condition croissant ou decroissant
    if (direction == "asc") {
        // organisation du copy paste
        copie.sort(function (a, b) {
        // condition de la comparaison des prix
        if (a.prix < b.prix) {
            return -1;
        } else {
            return 1;
        }
        });
    }
    afficherListeProduits(copie);
}


// Pour trier la liste en ordre alphabétique ("asc"/"desc")
function trier(tableau, direction) {
    let copie = [...tableau];

    if (direction == "asc") {
        copie.sort(function (a, b) {
        // condition de la comparaison des noms
        if (a.nom < b.nom) {
            return -1;
        } else {
            return 1;
        }
        });
    } else if (direction == "desc") {
        copie.sort(function (a, b) {
        // ditto
        if (a.nom > b.nom) {
            return -1;
        } else {
            return 1;
        }
        });
    }
    afficherListeProduits(copie);
}


// Pour vider la liste de consoles
function viderListe() {
    listeConsolesHTML.innerHTML = "";
}


// Pour vider les details de la console
function viderAside() {
    listeDetailConsolesHTML.innerHTML = "";
}


// Pour afficher les details de la console
function afficherDetail(console) {
    viderAside();
    // template pour l'aside "item-presentation"
    let gabarit = `
        <div>
            <img class = "detail-console_image" src="${console.image}" alt="">
            <br><p class = "detail-console_nom">${console.nom}</p>
            <br><span class = "detail-console_description">${console.description}</span>
        </div>`;

    // insertion du template/gabarit dans le HTML
    listeDetailConsolesHTML.insertAdjacentHTML("beforeend", gabarit);
}


// execution
init();