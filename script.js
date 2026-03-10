document.querySelectorAll('.nav-links a').forEach(link => {

link.addEventListener('click', function(e){

e.preventDefault()

const target = document.querySelector(this.getAttribute('href'))

window.scrollTo({

top: target.offsetTop - 80,
behavior: "smooth"

})

})

})


/* typing animation */

const text = ["Programmer","Web Developer","Cloud Practitioner"]

let i = 0
let j = 0
let current = ""
let deleting = false

function type(){

current = text[i]

if(deleting){
j--
}else{
j++
}

document.querySelector(".typing").textContent = current.substring(0,j)

if(!deleting && j === current.length){

deleting = true
setTimeout(type,1000)
return

}

if(deleting && j === 0){

deleting = false
i++

if(i === text.length){
i = 0
}

}

setTimeout(type,deleting ? 50 : 120)

}

type()
