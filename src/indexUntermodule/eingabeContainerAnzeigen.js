export class eingabeContainerAnzeigen {
    static projektEingabeContainerAnzeigen() {
        const eingabeContainer = document.getElementById("eingabeContainerProjekte");
        const overlay = document.getElementById("overlay");
        eingabeContainer.style.visibility = "visible";
        overlay.style.visibility = "visible";        
    }

    static projektEingabeContainerVerbergen() {
        const eingabeContainer = document.getElementById("eingabeContainerProjekte");
        const overlay = document.getElementById("overlay");
        eingabeContainer.style.visibility = "hidden";
        overlay.style.visibility = "hidden";        
    }
}