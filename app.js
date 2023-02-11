const containerOne = document.getElementById("container");
// containerOne.innerText = "Hello!";

const containerTwo = document.querySelector("#container");

const second = document.querySelectorAll(".second");

const ol = document.querySelector("ol .third");


const div = document.querySelector(".footer");
div.classList.add("main");

div.classList.remove("main");

const newLi = document.createElement("li");
newLi.innerText = "four";

const ul = document.querySelector("ul");
ul.append(newLi);

let liOl = document.querySelectorAll("ol li");

for(let i = 0; i < liOl.length; i++) {
    liOl[i].style.backgroundColor = "green";
}

const footer = document.querySelector(".footer");
footer.remove();