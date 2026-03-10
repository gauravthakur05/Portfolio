/* smooth scroll */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({behavior:"smooth"})

})

})


/* typing animation */

const text = ["Programmer","Web Developer","Cloud Practitioner"];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type(){

if(count === text.length){
count = 0;
}

currentText = text[count];
letter = currentText.slice(0,++index);

document.querySelector(".typing").textContent = letter;

if(letter.length === currentText.length){
count++;
index = 0;
}

setTimeout(type,120)

}

type();



/* scroll reveal */

const observer = new IntersectionObserver(entries =>{

entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.style.opacity = 1
entry.target.style.transform = "translateY(0)"
}

})

})


document.querySelectorAll("section").forEach(section=>{

section.style.opacity = 0
section.style.transform = "translateY(40px)"
section.style.transition = "all 1s"

observer.observe(section)

})
