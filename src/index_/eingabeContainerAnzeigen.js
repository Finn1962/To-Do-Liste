import {nutzerProjekte} from "../nutzerProjekte";

export class eingabeContainerAnzeigen {
    static overlay = document.getElementById("overlay")
    
    static projektEingabeContainerAnzeigen() {
        const eingabeContainer = document.getElementById("eingabeContainerProjekte");
        eingabeContainer.style.visibility = "visible";
        overlay.style.visibility = "visible";        
    }

    static projektEingabeContainerVerbergen() {
        const eingabeContainer = document.getElementById("eingabeContainerProjekte");
        const eingabeFeld = document.getElementById("eingabeFeldProjekte");
        const buttonÜbernehmen = document.getElementById("projektÜbernehmenBtn");
        const buttonSpeichern = document.getElementById("projektSpeichernBtn");
        eingabeFeld.value = "";
        buttonÜbernehmen.style.display = "none";
        buttonSpeichern.style.display = "block";
        eingabeContainer.style.visibility = "hidden";
        overlay.style.visibility = "hidden";        
    }

    static projektBearbeitenContainerAnzeigen(buchTitel) {
        const eingabeContainer = document.getElementById("eingabeContainerProjekte");
        const buttonÜbernehmen = document.getElementById("projektÜbernehmenBtn");
        const buttonSpeichern = document.getElementById("projektSpeichernBtn");
        const eingabeFeld = document.getElementById("eingabeFeldProjekte");
        eingabeFeld.value = buchTitel;
        buttonÜbernehmen.style.display = "block";
        buttonSpeichern.style.display = "none";
        eingabeContainer.style.visibility = "visible";
        overlay.style.visibility = "visible";        
    }

    static eingabeContainerLöschenÜberprüfungAnzeigen() {
        const eingabeContainer = document.getElementById("eingabeContainerLöschenÜberprüfung");
        eingabeContainer.style.visibility = "visible";
        overlay.style.visibility = "visible";        
    }

    static eingabeContainerLöschenÜberprüfungVerbergen() {
        const eingabeContainer = document.getElementById("eingabeContainerLöschenÜberprüfung");
        eingabeContainer.style.visibility = "hidden";
        overlay.style.visibility = "hidden";        
    }
}