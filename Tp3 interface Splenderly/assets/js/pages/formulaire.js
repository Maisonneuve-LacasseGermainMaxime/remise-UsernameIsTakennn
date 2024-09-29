// console.log("test formulaire");

// variables
let sectionActuelle = 0;
let formulaireValide = false
const donnees = {};

// selections
const formulaire = document.querySelector("#formulaire-principal")

const sectionsHTML = formulaire.querySelectorAll("section[data-page]")

const boutonsHTML = document.querySelectorAll("button")

const sectionResume = document.querySelector(".summary");

const champs = document.querySelectorAll("input, textarea, select")

const forwardButtonsHTML = formulaire.querySelectorAll('button[data-direction="1"]')
const backwardButtonsHTML = formulaire.querySelectorAll('button[data-direction="-1"]')


// fonctions
function init(){
    // boutons continuer en bouton
    forwardButtonsHTML.forEach(function(bouton){
        bouton.addEventListener("click", avancerSection)
    })

    // boutons retour en bouton
    backwardButtonsHTML.forEach(function(bouton){
        bouton.addEventListener("click", reculerSection)
    })

    // submit event
    formulaire.addEventListener("submit", onSubmit);
    
    // champs en champ
    champs.forEach(function(champ){
        champ.addEventListener("change", onChangementChamp)
    })
    toutCacher();
    afficherSection();
}


// fonction submit
function onSubmit(evenement){
    evenement.preventDefault();
    formulaireValide = formulaire.checkValidity();
    // condition pour la validation du formulaire
    if(formulaireValide){
        formulaire.submit();
        formulaire.reset();
    }
}


// permet de mettre une section visible
function afficherSection() {
    toutCacher();
    sectionsHTML[sectionActuelle].classList.remove("invisible");
}


// permet de mettre une section invisible
function toutCacher() {
    // sections en section
    sectionsHTML.forEach(function (element) {
        element.classList.add("invisible");
    });
}


// permet d'avancer d'une section
function avancerSection(evenement) {
    const declencheur = evenement.currentTarget;
    sectionActuelle++;

    if (sectionActuelle < sectionsHTML.length) {
        afficherSection();
    }
}


// permet de reculer d'une section
function reculerSection(evenement) {
    const declencheur = evenement.currentTarget;
    
    if (sectionActuelle > 0) {
        sectionActuelle--;
        afficherSection();
    }
}

// Changement Champ
function onChangementChamp(evenement) {
    const declencheur = evenement.currentTarget
    const type = declencheur.type;
    const name = declencheur.name
    const value = declencheur.value
    const checked = declencheur.checked

    // validation checkbox
    if(type == "checkbox"){
        const champSelect = formulaire.querySelector("[name='succursale-select']");

        if (checked == true) {
            champSelect.disabled = false;
            champSelect.required = true;
        } else {
            champSelect.disabled = true;
            champSelect.required = false;
            champSelect.value = "";
        }
        afficherResumeCheckbox(name, checked)
    } else {
        afficherResume(name, value) 
    }

    
    // Validation du champ
    const estValide = declencheur.checkValidity();
    
    if (estValide == false) {
        declencheur.classList.add("invalid");
    } else {
        declencheur.classList.remove("invalid");
    }

    if (estValide) {
        // Récupérer la section parent
        const sectionParent = declencheur.closest("section");
        const champsSection = sectionParent.querySelectorAll("[name]");

        const tableauValidation = [];

        champsSection.forEach(function (champ) {
            const estValide = champ.checkValidity();
            tableauValidation.push(estValide);
        });

        const sectionInvalide = tableauValidation.includes(false);
        
        // On vérifie la section et on active le bouton suivant au besoin
        if (sectionInvalide !== true) {
            sectionParent.querySelector("button[data-direction='1']").disabled = false;
        }
    }
}

// Modifier le résumé
function afficherResumeCheckbox(nomChamp, estCoche) {
    const champResume = sectionResume.querySelector(`[data-name="${nomChamp}"]`)
    if(champResume !== null){
        let texte = estCoche ? "OUI" : "NON";
        champResume.textContent = texte;
    }
}

function afficherResume(nomChamp, valeur) {
    const champResume = sectionResume.querySelector(`[data-name="${nomChamp}"]`)
    if(champResume !== null){
        champResume.textContent = valeur
    }
}

// execution
init()