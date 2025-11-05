import iconBearbeiten from '../images/iconBearbeiten.svg';
import iconLöschen from '../images/iconLöschen.svg';
import iconAbgeschlossen from "../images/iconAbgeschlossen.svg";
import iconNichtAbgeschlossen from "../images/iconNichtAbgeschlossen.svg";
import pfeil from "../images/pfeil.svg";
import {nutzerProjekte} from "../nutzerProjekte";


export class domManipulation {
    
    static projekteInDomÜbernehmen() {
        const ausgewählterHTMLBereich = document.getElementById("projekteBereich");
        ausgewählterHTMLBereich.innerHTML = "";
        
        for (let i = 0; i < nutzerProjekte.length; i++) {
            //Projektbutton zum auswählen wird erstellt
            const div = document.createElement("div");
            div.className = "projekt";
            const text = document.createElement("p");
            text.classList.add("klickbar");
            text.textContent = nutzerProjekte[i].titel;
            text.addEventListener("click", () => {
                const signalAnzeigen = new CustomEvent("buttonAufgabenAnzeigenGeklickt", {
                    detail: nutzerProjekte[i].titel,
                    bubbles: true,
                });  
                document.dispatchEvent(signalAnzeigen); 
            });
            div.appendChild(text);

            //Projekt Bearbeiten Button anhängen
            const bearbeitenButton = this.neuerButton(
                iconBearbeiten,
                15,
                "buttonProjektBearbeitenGeklickt",
                nutzerProjekte[i].titel
            );
            div.appendChild(bearbeitenButton);

            //Projekt Löschen Button anhängen  
            const löschenButton = this.neuerButton(
                iconLöschen,
                15,
                "buttonProjektLöschenGeklickt",
                nutzerProjekte[i].titel
            );
            div.appendChild(löschenButton);
            ausgewählterHTMLBereich.appendChild(div);
        }
    }

    static aufgabenInDomÜbernehmen(projekttitel){
        document.getElementById("buttonAufgabenHinzufügen").style.visibility = "visible";
        const ausgewählterHTMLBereich = document.getElementById("aufgabenBereich");
        ausgewählterHTMLBereich.innerHTML = "";
        const projekt = nutzerProjekte.find(p => p.titel == projekttitel);
        document.getElementById("text").textContent = projekttitel;

        for (let i = 0; i < projekt.aufgaben.length; i++) {
            
            //Aufgabencode in HTML einfügen
            const datum = new Date(projekt.aufgaben[i].endtermin.datum);
            let datumDeutsch = datum.toLocaleDateString("de-DE");
            if (!projekt.aufgaben[i].endtermin.datum) {
                datumDeutsch = "--";
            }
            let uhrzeit = projekt.aufgaben[i].endtermin.uhrzeit;
            if (!projekt.aufgaben[i].endtermin.uhrzeit) {
                uhrzeit = "--"
            }
            const aufgabenDiv = document.createElement("div");
            aufgabenDiv.className = "aufgabe"
            aufgabenDiv.id = "aufgabe"+i;
            aufgabenDiv.innerHTML = `            
                <div class="container2">
                    <div class="trennbalken"></div>
                    <div id="divTitel${i}" style="display: flex;">
                        <p>${projekt.aufgaben[i].titel}</p>
                    </div>
                    <div class="trennbalken"></div>
                    <p>Priorität: ${projekt.aufgaben[i].priorität}</p>
                    <div class="trennbalken"></div>
                    <div style="display: flex; flex-direction: column; justify-content: end;">
                        <p class="datum" style="text-align: right;">${uhrzeit}</p>
                        <p class="datum">${datumDeutsch}</p>
                    </div>
                    <div class="trennbalken"></div>
                </div>`
            ;
            ausgewählterHTMLBereich.appendChild(aufgabenDiv);
            
            //Abschnitt mit allen Buttons für die Aufgaben
            const div = document.createElement("div");
            div.className = "container1";
           
            //Bearbeitenbutton Anhängen
            const bearbeitenButton = this.neuerButton(
                iconBearbeiten,
                15,
                "buttonAufgabeBearbeitenGeklickt",
                projekt.aufgaben[i].titel
            );
            div.appendChild(bearbeitenButton);
            
            //Löschenbutton Anhängen
            const löschenButton = this.neuerButton(
                iconLöschen,
                15,
                "buttonAufgabeLöschenGeklickt",
                projekt.aufgaben[i].titel
            );
            div.appendChild(löschenButton);

            const aufgabe = document.getElementById(`aufgabe${i}`);
            aufgabe.prepend(div);  
            
            //Abgescholossenbutton Anhängen 
            let statusIcon;
            if (projekt.aufgaben[i].erledigt) {
                statusIcon = iconAbgeschlossen;
            } else {
                statusIcon = iconNichtAbgeschlossen;
            }
            const statusButton = this.neuerButton(
                statusIcon,
                20,
                "buttonAufgabenstatusGecklickt",
                {titel: projekt.aufgaben[i].titel, id: "statusbutton"+i},
                "statusbutton"+i
            );
            const divFürTitel = document.getElementById(`divTitel${i}`);
            divFürTitel.prepend(statusButton);
        
            //Größebutton Anhängen
            if (projekt.aufgaben[i].beschreibung) {
                const pfeilButton = this.neuerButton(
                    pfeil,
                    15,
                    "buttonAufgabNeuSkalierenGeklickt",
                    {titel: projekt.aufgaben[i].titel, ids:{idButton:"pfeilbutton"+i, idAufgabe:"aufgabe"+i}},
                    "pfeilbutton"+i
                );
                aufgabe.append(pfeilButton);
            }

            //Beschreibung anhängen
            const beschreibung = document.createElement("p");
            beschreibung.className = "beschreibung"
            beschreibung.textContent = projekt.aufgaben[i].beschreibung;
            aufgabe.append(beschreibung);
        }
    }

    //Fabrikator Buttons
    static neuerButton(src, width, ausgabeEventButton, eventdetail, id) {
        const button = document.createElement("img");
        button.classList.add("klickbar");
        button.setAttribute("draggable", "false");
        button.src = src;
        button.width = `${width}`;
        button.addEventListener("click", () => {
            const signal = new CustomEvent(ausgabeEventButton, {
                detail: eventdetail,
                bubbles: true,
            });
            document.dispatchEvent(signal);
        });
        button.id = `${id}`;
        return button;
    }

    static aufgabenStatusÄndern(titelAufgabe, titelProjekt, id) {
        const projekt = nutzerProjekte.find(p => p.titel == titelProjekt);
        const aufgabe = projekt.aufgaben.find(a => a.titel == titelAufgabe);
        const button = document.getElementById(id);
        if (aufgabe.erledigt) {
            button.src = iconNichtAbgeschlossen;
        } else {
            button.src = iconAbgeschlossen;
        }
    }

    static aufgabenHöheÄndern(titelAufgabe, titelProjekt, idButton, idAufgabe) {
        const projekt = nutzerProjekte.find(p => p.titel == titelProjekt);
        const aufgabe = projekt.aufgaben.find(a => a.titel == titelAufgabe);
        const aufgabeElement = document.getElementById(idAufgabe);
        const button = document.getElementById(idButton);
        if (aufgabe.aufgeklappt) {
            aufgabeElement.style.height = "50px";
            button.style.transform = "rotate(0deg)";
        } else {
            const höheAufgecklick = aufgabeElement.scrollHeight;
            aufgabeElement.style.height = höheAufgecklick+"px";
            button.style.transform = "rotate(180deg)";
        }
    }

    static aufgabenAusDomEntfernen() {
        document.getElementById("aufgabenBereich").innerHTML = "";
        document.getElementById("buttonAufgabenHinzufügen").style.visibility = "hidden";
        document.getElementById("text").textContent = "Wähle ein Projekt aus";
    }
}