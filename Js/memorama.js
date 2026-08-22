//creamos una clase juego
class Juego {
    //creamos el cosntructor 
    constructor() {
        //esto se pone para saber si ya puede jugar o no 
        this.canPlay = false;
        //creamos las variables de las targetas abiertas en este caso tendran null ya que no va aver ninguna targeta abierta 
        this.card1 = null;
        this.card2 = null;
        //esto es una arreglo numerico que nos idican las imagenes disponibles
        this.availableImages = [1,2,3,4,5,6,7,8];
        //indica el orden para el juego
        this.orderForThisRound = [];
        //esto tendra el arreglo de las targetas 
        this.cards = Array.from( document.querySelectorAll(".board-game figure") );
        this.maxPairNumber = this.availableImages.length;
        //esto nos indica que inicia el juego
        this.comenzar();
        //esto imprime el orden de las imagenes en cada juego
        console.log(this.orderForThisRound);
    }

    //cuando el juego comienza se ejecutan estas funciones
    comenzar() {
        this.foundPairs = 0;
        this.Ordenuevo();
        this.imagenesDeCartas();
        this.abrircartas();
    }

    //esto nos indicara el nuevo orden cada que cargemos la paguina
    //o termine el juego
    Ordenuevo() {
        this.orderForThisRound = this.availableImages.concat(this.availableImages);
        //aca revolvemos las imagenes en cada partida 
        this.orderForThisRound.sort( () => Math.random() - 0.5 );
    }

    //aca insertamos las imagenes en las cartas de la pagina 
    //con cada numero del arreglo
    imagenesDeCartas() {
        //key es el indice del arreglo en cada iteracion
        for (const key in this.cards) {
            //esto tiene la targeta actual
            const card = this.cards[key];
            //agregamos el numero a la carta con imagen
            const image = this.orderForThisRound[key];
            //aca accedemos a los que esta en cada carta del HTML
            const imgLabel = card.children[1].children[0]
            //contiene el valor de la imagen actual
            card.dataset.image = image;
            //cambiamos las imagenes de manera aleatoria 
            imgLabel.src = `IMG/${image}.jpg`;
        }
    }

    //esto abre las imagenes 
    abrircartas() {
        //se accade a las targetas y se abren
        this.cards.forEach(card => card.classList.add("opened"));
        //este indica el tiempo en el que se deben cerrar las imagenes 
        setTimeout(() => {
            this.cerrar();
        }, 3000);
    }

    //cerramos las targetas 
    cerrar() {
        //con el remove las targetas se cierran
        this.cards.forEach(card => card.classList.remove("opened"));
        //añadimos los eventos de click añadiendoselo a cada targeta 
        this.addClickEvents();
        //esto indica que cuando las targetas esten cerrada ya puede 
        //empezar a jugar
        this.canPlay = true;
    }

    //añadimos el evento de click
    addClickEvents() {
        //acada targeta añadir el evento de click 
        // esto hace que caundo se de click la targeta se debe de voltear
        this.cards.forEach(_this => _this.addEventListener("click", this.flipCard.bind(this)));
    }

    removeClickEvents() {
        this.cards.forEach(_this => _this.removeEventListener("click", this.flipCard));
    }

    
    flipCard(e) {
        // accedemos a la targeta donde nosotros dimos click
        const clickedCard = e.target;
        //si el usuario puede jugar y la no contiene la clase opened se pueda abrir
        if (this.canPlay && !clickedCard.classList.contains("opened")) {
            //si se cumple lo anterior podemos abrir la targeta
            clickedCard.classList.add("opened");
            //verificamos si el par de targetas abiertas coinciden
            this.comprobacion( clickedCard.dataset.image );
        }
    }

    //esta funcion comprueba las cartas que nosotros dimos click
    comprobacion(image) {
        //establece el valor a la carta 1 si no lo tiene
        if (!this.card1) this.card1 = image;
        //si lo primero ya tiene un valor asiganselo a la carta 2
        else this.card2 = image;
        //hacemos las comparaciones si las dos imagenes tienen valor 
        if (this.card1 && this.card2) {
            //verificamos si las targetas coinciden
            if (this.card1 == this.card2) {
                this.canPlay = false;
                setTimeout(this.alerta.bind(this), 400)
            }else {//esto no ayuda a voltear las imagenes de nuevo si no son iguales
                this.canPlay = false;
                setTimeout(this.restablecer.bind(this), 800)
            }
        }
    }

    //restablece las imagenes 
    restablecer() {
        //buscamos las targetas abiertas que no concidieron y cerrarlas
        const firstOpened = document.querySelector(`.board-game figure.opened[data-image='${this.card1}']`);
        const secondOpened = document.querySelector(`.board-game figure.opened[data-image='${this.card2}']`);
        firstOpened.classList.remove("opened");
        secondOpened.classList.remove("opened");
        //receteamos las targetas para volver a ejecutar la comprobacion
        this.card1 = null;
        this.card2 = null;
        this.canPlay = true;
    }

    //esto nos indica un mensaje de que el juego termino
    alerta() {
        this.foundPairs++;
        this.card1 = null;
        this.card2 = null;
        this.canPlay = true;
        //aca se pone la alerta del juego cuando termina
        if (this.maxPairNumber == this.foundPairs) {
            alert("Juego terminado lo lograste!");
            this.juegoNuevo();
        }
    }

    juegoNuevo() {
        this.removeClickEvents();
        this.cards.forEach(card => card.classList.remove("opened"));
        setTimeout(this.startGame.bind(this), 1000);
    }

}

//documento con un evento y nos indica que el documento ya se cargo completamente y se ejecute 
document.addEventListener("DOMContentLoaded", () => {
    //creamos una instancia de Juego
    new Juego();
});