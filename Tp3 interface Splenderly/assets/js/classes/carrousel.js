// Class Carrousel
class Carrousel {
    constructor(conteneurHTML, tableauImages, tableauNoms) {
        this.conteneurHTML = conteneurHTML
        this.imageConteneurHTML = this.conteneurHTML.querySelector(".image-principale")
        this.nomConteneurHTML = this.conteneurHTML.querySelector(".nom-principale")

        this.tableauImages = tableauImages
        this.tableauNoms = tableauNoms
        this.position = 0

        // click
        this.conteneurHTML.addEventListener("click", this.onClicCarrousel.bind(this))

        // commencent à la position 0
        let imageAuDepart = this.tableauImages[this.position]
        let nomAuDepart = this.tableauNoms[this.position]
        

        this.afficherImageNom(imageAuDepart, nomAuDepart)

        // avancement à chaque 5 seconds
        window.setInterval(
            function () {
                this.avancer();
            }.bind(this),
            8000
        );
    }

    // pour afficher les images par sources et les noms
    afficherImageNom(source, nom){
        this.imageConteneurHTML.src = source;
        // something missing here
        this.nomConteneurHTML = nom;

        console.log(this.imageConteneurHTML);
        console.log(this.nomConteneurHTML);
        
    }


    onClicCarrousel(evenement){
        let target = evenement.target;
        let bouton = target.closest("[data-direction]");

        if(bouton != null){
            let direction = bouton.dataset.direction
            // console.log(direction);

            if (direction == 1) {
                this.avancer();
            } else if (direction == -1) {
                this.reculer();
            }
        }
    }

    // pour avancer l'image et le nom
    avancer(){
        this.position++;
        if (this.position >= this.tableauImages.length  && this.position >= this.tableauNoms.length) {
            this.position = 0;
        }

        let image = this.tableauImages[this.position];
        let nom = this.tableauNoms[this.position]
        this.afficherImageNom(image, nom);
    }

    // pour reculer l'image et le nom
    reculer(){
        let image = this.tableauImages[this.position];
        let nom = this.tableauNoms[this.position]

        if (this.position >= 0){
            this.position--;
            this.afficherImageNom(image, nom);
        }
    }

}

export default Carrousel