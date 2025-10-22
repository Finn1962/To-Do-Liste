import {nutzerProjekte} from "./nutzerProjekte"



export class domManipulation {
    
    static projekteInDomÜbernehmen() {
        const projekteUndÜberschrift = document.getElementById("projekteUndÜberschrift");
        //projekteUndÜberschrift.innerHTML = "";
        if (nutzerProjekte.length>0) {
            for (let i = 0; i<nutzerProjekte.length; i++) {
                //const neuesProjekt = document.createElement('p');
                //neuesProjekt.textContent = nutzerProjekte[i].titel;
                //neuesProjekt.classList.add("projekt");
                //projekteUndÜberschrift.appendChild(neuesProjekt);
            }
        }
    }
}