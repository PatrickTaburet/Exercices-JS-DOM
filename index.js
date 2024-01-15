// ------------EXERCICE 10
// ------------Exercice : Afficher/cacher

// let element = document.getElementById("second");
// element.classList.remove("hidden");

// ------------Exercice : Cacher les spoilers

// let element = document.getElementsByClassName("spoiler");
// console.log(element);

// function hideElements (){
//     for (let i = 0; i < element.length ; i++){
//         if (element[i].classList.contains("hidden")){
//             element[i].classList.remove("hidden");
//         } else {
//             element[i].classList.add("hidden");
//         }
//     } 
// }

// let buttonHide = document.getElementById("buttonHide");
// buttonHide.onclick = function() {hideElements()};

// ------------Exercice : Surbrillance au clic

// let element = document.getElementById("second");

// let elements = document.getElementsByTagName("p");
// console.log(elements[1].style.backgroundColor== 0)


// for (let i = 0; i < elements.length ; i++){
//     elements[i].onclick = function(){
//         if (this.style.backgroundColor == ""){
//             this.style.backgroundColor = "yellow"; 
//         } else {
//             this.style.backgroundColor = ""; 
//         }
//     }
// }

// --------------Exercice à rendre: Filtrage par catégorie

let viewAllButton = document.getElementById("viewButton");
let woodButton = document.getElementById("woodButton");
let stoneButton = document.getElementById("stoneButton");
let glassButton = document.getElementById("glassButton");   
let allArticles = document.getElementsByTagName('article');

function viewAll () {
    for (let i=0 ; i < allArticles.length ; i++){
        if (allArticles[i].classList.contains("hidden")){
            allArticles[i].classList.remove("hidden");
        }
    }
}
function viewMaterial (material) {
    for (let i=0 ; i < allArticles.length ; i++){
        if (allArticles[i].classList.contains(material)){
            allArticles[i].classList.remove("hidden");
        } else {
            allArticles[i].classList.add("hidden");
        }
    }
}

viewAllButton.onclick = function() {viewAll()};
woodButton.onclick = function() {viewMaterial("wood")};
stoneButton.onclick = function() {viewMaterial("stone")};
glassButton.onclick = function() {viewMaterial("glass")};
// console.log(allArticles);