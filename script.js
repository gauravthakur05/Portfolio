/* smooth scroll */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click",function(e){

e.preventDefault()

document.querySelector(this.getAttribute("href"))
.scrollIntoView({behavior:"smooth"})

})

})


/* typing animation */

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

setTimeout(type,isDeleting ? 50 : 120)

}

type()


/* scroll animation */

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity = 1
entry.target.style.transform = "translateY(0)"

}

})

})

document.querySelectorAll(".section").forEach(sec=>{

sec.style.opacity = 0
sec.style.transform = "translateY(40px)"
sec.style.transition = "1s"

observer.observe(sec)

})
