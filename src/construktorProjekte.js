export class projekt {
    constructor(titel, aufgaben = []){
        this.titel = titel
        this.aufgaben = aufgaben
    }

    aufgabenHinzufügen(aufgabe){
        this.aufgaben.push(aufgabe);
    };
}
