import iconBearbeiten from '../../images/iconBearbeiten.svg';
import iconLöschen from '../../images/iconLöschen.svg';
import iconAbgeschlossen from "../../images/iconAbgeschlossen.svg"
import iconNichtAbgeschlossen from "../../images/iconNichtAbgeschlossen.svg"
import {nutzerProjekte} from "../projekteUndAufgabenUntermodule/nutzerProjekte"


export class domManipulation {
    
    static projekteInDomÜbernehmen() {
        const ausgewählterHTMLBereich = document.getElementById("projekteBereich");
        ausgewählterHTMLBereich.innerHTML = "";
        
        for (let i = 0; i < nutzerProjekte.length; i++) {
            const div = document.createElement("div");
            div.className = "projekt";
            div.addEventListener("click", () => domManipulation.aufgabenInDomÜbernehmen(nutzerProjekte[i].titel));
            div.innerHTML = `
                <p>${nutzerProjekte[i].titel}</p>
                <img src="${iconBearbeiten}" width="15px">
                <img src="${iconLöschen}" width="15px">
            `;
            ausgewählterHTMLBereich.appendChild(div);
        }
    }

    static aufgabenInDomÜbernehmen(projekttitel){
        const ausgewählterHTMLBereich = document.getElementById("aufgabenBereich");
        ausgewählterHTMLBereich.innerHTML = "";
        const projekt = nutzerProjekte.find(p => p.titel == projekttitel);

        for (let i = 0; i < projekt.aufgaben.length; i++) {
            document.getElementById("text").textContent = "Aufgaben";
            ausgewählterHTMLBereich.innerHTML += `            
                <div class="aufgabe" id="aufgabe">
                    
                    <div class="container1">
                        <img src="${iconBearbeiten}" width="15px">
                        <img src="${iconLöschen}" width="15px">
                    </div>
                    
                    <div class="container2">
                        <div style="display: flex;">
                            <img src="${iconNichtAbgeschlossen}" width="25px">
                            <p>${projekt.aufgaben[i].titel}</p>
                        </div>
                        <div class="trennbalken"></div>
                        <p>Priorität: ${projekt.aufgaben[i].priorität}</p>
                        <div class="trennbalken"></div>
                        <div style="display: flex; flex-direction: column; justify-content: end;">
                            <p class="datum">${projekt.aufgaben[i].endtermin.datum}</p>
                            <p class="datum" style="text-align: right;">${projekt.aufgaben[i].endtermin.uhrzeit}</p>
                        </div>
                    </div>

                    <p>${projekt.aufgaben[i].beschreibung}</p>

                    <div id="${"box"+i}" style="display: flex; justify-content: space-around;">
                    </div>

                    <hr>
                    <hr>
                </div>`
            ;

            const zwischenschritteBox = document.getElementById("box"+i);
            if (projekt.aufgaben[i].zwischenschritte.length == 0) return;
            for (let j = 0; j < projekt.aufgaben[i].zwischenschritte.length; j++){
                const htmlCodeZwischenschritte = 
                    `<div style="display: flex; justify-content: center;">
                        <img src="${iconNichtAbgeschlossen}" width="20px" style="margin-right: 5px;">
                        <p>${projekt.aufgaben[i].zwischenschritte[j]}</p>
                    </div>`
                ;
                zwischenschritteBox.innerHTML += htmlCodeZwischenschritte;
            }
        }
    }
}