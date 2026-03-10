/* SMOOTH NAVBAR SCROLL WITH OFFSET */

document.querySelectorAll('.nav-links a').forEach(link => {

link.addEventListener('click', function(e){

e.preventDefault()

const target = document.querySelector(this.getAttribute('href'))

window.scrollTo({
top: target.offsetTop - 70,
behavior: "smooth"
})

})

})


/* TYPING ANIMATION */

const texts = ["Programmer","Web Developer","Cloud Practitioner"]

let textIndex = 0
let charIndex = 0
let isDeleting = false

function typeEffect(){

const currentText = texts[textIndex]

if(isDeleting){

charIndex--

}else{

charIndex++

}

document.querySelector(".typing").textContent =
currentText.substring(0,charIndex)

if(!isDeleting && charIndex === currentText.length){

isDeleting = true
setTimeout(typeEffect,1200)
return

}

if(isDeleting && charIndex === 0){

isDeleting = false
textIndex++

if(textIndex === texts.length){
textIndex = 0
}

}

setTimeout(typeEffect,isDeleting ? 60 : 120)

}

typeEffect()



/* SCROLL REVEAL ANIMATION */

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1"
entry.target.style.transform = "translateY(0)"

}

})

})

document.querySelectorAll("section").forEach(section => {

section.style.opacity = "0"
section.style.transform = "translateY(40px)"
section.style.transition = "1s"

observer.observe(section)

})
