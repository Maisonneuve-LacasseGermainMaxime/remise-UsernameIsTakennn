// importation
import { init as initModale, afficherModale } from "../components/boiteModale.js";
import Carrousel from "../classes/carrousel.js";

// fonctions
function init() {

    // partie modale
    initModale();

    let modaleDejaOuverte = localStorage.getItem("modale-ouverte");
    // vérification si la boite modale n'est pas ouverte + 5 seconds d'affichage
    if (modaleDejaOuverte != "true") {
        setTimeout(function () {
            afficherModale();
        }, 5000);
    }


    // partie carrousel
    let carrouselConteneur = document.querySelector("[data-carrousel]");
    let tableauImages = [
        "assets/img/nintendo color tv-game.jpg", 
        "assets/img/nintendo game & watch.jpg",
        "assets/img/nintendo famicom.jpg",
        "assets/img/nintendo-nes.jpg",
        "assets/img/nintendo-gameboy.jpg",
        "assets/img/nintendo-snes.jpg",
        "assets/img/nintendo virtual boy.jpg",
        "assets/img/nintendo 64.jpg",
        "assets/img/nintendo game boy color.jpg",
        "assets/img/nintendo-gba.jpg",
        "assets/img/nintendo gamecube.jpg",
        "assets/img/nintendo-ds.jpg",
        "assets/img/nintendo-ds-lite.jpg",
        "assets/img/nintendo wii.jpg",
        "assets/img/nintendo-3ds.jpg",
        "assets/img/nintendo wii u.jpg",
        "assets/img/nintendo-switch.jpg",
        "assets/img/nintendo-switch-lite.jpg"
    ];

    let tableauNoms = [
        "Color TV-Game",
        "Game & Watch",
        "Famicom",
        "NES",
        "Gameboy",
        "SNES",
        "Virtual Boy",
        "Nintendo 64",
        "Game Boy Color",
        "GBA",
        "Gamecube",
        "DS",
        "DS Lite",
        "Wii",
        "3DS",
        "Wii U",
        "Switch",
        "Switch Lite"
    ];

    let carrousel = new Carrousel(carrouselConteneur, tableauImages, tableauNoms);
}

// execution
init();