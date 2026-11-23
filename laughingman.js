const SQUARE_COUNT = 3;
const firstsquare = document.querySelector("#square");

firstSquare.style.left = "250px";
firstSquare.style.top = "170px";

firstSquare.addEventListener("click", () => {
    alert("OMG YOU CLICKED ME");

});
let box = document.querySelector("#box");
for(let i = 0; i < SQUARE_COUNT; i++) {
    let square = document.createElement("img");
    square.src = "laughing_man.jpg";
    square.alt = "Catch the Laughing man";
    square.className = "square";
    square.style.left = "225px";
    square.style.top = "175px";
    box.appendChild(square);
}