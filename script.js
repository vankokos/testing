let p = document.querySelectorAll("p")

for (let i = 0; i < p.length; i++) {
    p[i].addEventListener("mouseover", ()=> {
        p[i].style.color = "white"
    })

    p[i].addEventListener("mouseout", ()=> {
        p[i].style.color = "black"
    })
}

let btn = document.querySelector("#btn")
let audio = new Audio("fart-01.wav")

btn.addEventListener("click", ()=> {
    audio.play()
    alert("учился бы лучше дебил блять")
    window.location.href = "https://drive.google.com/file/d/1kq5iGQwgEO9EmFBPvTCmqfJNL8FRQnoX/view"
})

let img = document.querySelector("img") 

img.addEventListener("mouseover", ()=> {
    img.style.opacity = "1"
})

img.addEventListener("mouseout", ()=> {
    img.style.opacity = "0"
})

