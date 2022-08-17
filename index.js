let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el");
let count = 0;

function addCount() {
    count = count + 1;
    countEl.textContent = count;
}

function save() {
    let preEnt = count + ", ";
    saveEl.textContent += preEnt;
    count = 0;
    countEl.textContent = count;
}

console.log("Let's count people on the subway!")