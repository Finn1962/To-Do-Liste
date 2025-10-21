class aufgaben {
    constructor(titel, beschreibung, endtermin, priorität, zwischenschritte = [],){
        this.titel = titel
        this.beschreibung = beschreibung
        this.endtermin = endtermin
        this.priorität = priorität
        this.erledigt = erledigt
        this.zwischenschritte = zwischenschritte
    }
}

//const aufgabe = new aufgabe("...", "...", "...", "...", [schritt1, schritt2, schritt2])