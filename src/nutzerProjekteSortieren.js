import {nutzerProjekte} from "./nutzerProjekte"

const prioritätRang = {
    "hoch": 3,
    "mittel": 2,
    "niedrig": 1,
}

export function nachWichtigkeitSortieren() {
    for (let i = 0; i < nutzerProjekte.length; i++){
        nutzerProjekte[i].aufgaben.sort((a, b) => prioritätRang[b.priorität] - prioritätRang[a.priorität]);
    }
}