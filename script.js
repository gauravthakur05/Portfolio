/* NAVBAR SMOOTH SCROLL */

document.querySelectorAll('.nav-links a').forEach(link => {

link.addEventListener('click', function(e){

e.preventDefault()

const target = document.querySelector(this.getAttribute('href'))

window.scrollTo({
top: target.offsetTop - 90,
behavior: "smooth"
})

})

})


/* TYPING ANIMATION */

const words = ["Programmer","Web Developer","Cloud Practitioner"]

let i = 0
let j = 0
let current = ""
let isDeleting = false

function type(){

current = words[i]

if(isDeleting){
j--
}else{
j++
}

document.querySelector(".typing").textContent = current.substring(0,j)

if(!isDeleting && j === current.length){

isDeleting = true
setTimeout(type,1200)
return

}

if(isDeleting && j === 0){

isDeleting = false
i++

if(i === words.length){
i = 0
}

}

setTimeout(type,isDeleting ? 60 : 120)

}

type()
