import iconBearbeiten from '../images/iconBearbeiten.svg';
import iconLöschen from '../images/iconLöschen.svg';
import iconAbgeschlossen from "../images/iconAbgeschlossen.svg"
import iconNichtAbgeschlossen from "../images/iconNichtAbgeschlossen.svg"
import {nutzerProjekte} from "../nutzerProjekte"


export class domManipulation {
    
    static projekteInDomÜbernehmen() {
        const ausgewählterHTMLBereich = document.getElementById("projekteBereich");
        ausgewählterHTMLBereich.innerHTML = "";
        
        for (let i = 0; i < nutzerProjekte.length; i++) {
            //Projektbutton zum auswählen wird erstellt
            const div = document.createElement("div");
            div.className = "projekt";
            const text = document.createElement("p");
            text.textContent = nutzerProjekte[i].titel;
            text.addEventListener("click", () => {
                const signalAnzeigen = new CustomEvent("buttonAufgabenAnzeigenGeklickt", {
                    detail: nutzerProjekte[i].titel,
                    bubbles: true,
                });  
                document.dispatchEvent(signalAnzeigen); 
            });
            //Projekt Bearbeiten Button anhängen
            div.appendChild(text);
            const bearbeitenButton = document.createElement("img");
            bearbeitenButton.src = iconBearbeiten;
            bearbeitenButton.width = "15";
            bearbeitenButton.addEventListener("click", () => {
                const signalbearbeiten = new CustomEvent("buttonProjektBearbeitenGeklickt", {
                    detail: nutzerProjekte[i].titel,
                    bubbles: true,
                });  
                document.dispatchEvent(signalbearbeiten); 
            });
            //Projekt Löschen Button anhängen
            div.appendChild(bearbeitenButton);
            const löschenButton = document.createElement("img");
            löschenButton.src = iconLöschen;
            löschenButton.width = "15";
            löschenButton.addEventListener("click", () => {
                const signalLöschen = new CustomEvent("buttonProjektLöschenGeklickt", {
                    detail: nutzerProjekte[i].titel,
                    bubbles: true,
                });
                document.dispatchEvent(signalLöschen);
            });
            div.appendChild(löschenButton);
            ausgewählterHTMLBereich.appendChild(div);
        }
    }

    static aufgabenInDomÜbernehmen(projekttitel){
        document.getElementById("buttonAufgabenHinzufügen").style.visibility = "visible";
        const ausgewählterHTMLBereich = document.getElementById("aufgabenBereich");
        ausgewählterHTMLBereich.innerHTML = "";
        const projekt = nutzerProjekte.find(p => p.titel == projekttitel);
        
        for (let i = 0; i < projekt.aufgaben.length; i++) {
            
            document.getElementById("text").textContent = "Aufgaben";
            //Aufgabencode in HTML einfügen
            const datum = new Date(projekt.aufgaben[i].endtermin.datum);
            const datumDeutsch = datum.toLocaleDateString("de-DE");
            const aufgabenDiv = document.createElement("div");
            aufgabenDiv.className = "aufgabe"
            aufgabenDiv.id = `aufgabe${i}`
            aufgabenDiv.innerHTML = `            
                <div class="container2">
                    <div style="display: flex;">
                        <img src="${iconNichtAbgeschlossen}" width="25px">
                        <p>${projekt.aufgaben[i].titel}</p>
                    </div>
                    <div class="trennbalken"></div>
                    <p>Priorität: ${projekt.aufgaben[i].priorität}</p>
                    <div class="trennbalken"></div>
                    <div style="display: flex; flex-direction: column; justify-content: end;">
                        <p class="datum">${datumDeutsch}</p>
                        <p class="datum" style="text-align: right;">${projekt.aufgaben[i].endtermin.uhrzeit}</p>
                    </div>
                </div>

                <p>${projekt.aufgaben[i].beschreibung}</p>

                <hr>
                <hr>`
            ;
            ausgewählterHTMLBereich.appendChild(aufgabenDiv);
            
            //Buttons Aufgabe
            const div = document.createElement("div");
            div.className = "container1";
            //Bearbeitenbutton Anhängen
            const bearbeitenButton = document.createElement("img");
            bearbeitenButton.src = iconBearbeiten;
            bearbeitenButton.width = "15";
            bearbeitenButton.addEventListener("click", () => {
                const signalBearbeiten = new CustomEvent("buttonAufgabeBearbeitenGeklickt", {
                    detail: projekt.aufgaben[i].titel,
                    bubbles: true,
                });  
                document.dispatchEvent(signalBearbeiten); 
            });
            div.appendChild(bearbeitenButton);
            //Löschenbutton Anhängen
            const löschenButton = document.createElement("img");
            löschenButton.src = iconLöschen;
            löschenButton.width = "15";
            löschenButton.addEventListener("click", () => {
                const signalLöschen = new CustomEvent("buttonAufgabeLöschenGeklickt", {
                    detail: projekt.aufgaben[i].titel,
                    bubbles: true,
                });
                document.dispatchEvent(signalLöschen);
            });
            div.appendChild(löschenButton);
            const aufgabe = document.getElementById(`aufgabe${i}`);
            aufgabe.prepend(div);   
            //Abgescholossenbutton Anhängen. 
        }
    }
}