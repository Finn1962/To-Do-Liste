import iconBearbeiten from './images/iconBearbeiten.svg';
import iconLöschen from './images/iconLöschen.svg';
import {nutzerProjekte} from "./nutzerProjekte"


export class domManipulation {
    
    static projekteInDomÜbernehmen() {
        const ausgewählterHTMLBereich = document.getElementById("projekteBereich");
        ausgewählterHTMLBereich.innerHTML = "";
        
        if (nutzerProjekte.length>0) {
            for (let i = 0; i<nutzerProjekte.length; i++) {
                const titel = nutzerProjekte[i].titel;
                const htmlCodeProjekte =             
                    `<div class="projektContainer">
                        <p>${titel}</p>
                        <img src="${iconBearbeiten}" width="15px">
                        <img src="${iconLöschen}" width="15px">
                    </div>`
                ;
                ausgewählterHTMLBereich.innerHTML += htmlCodeProjekte;
            }
        }
    }
}