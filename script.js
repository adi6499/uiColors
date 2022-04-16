let colors = document.querySelector(".colors")
for (let i = 0; i < 180; i++) {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    colors.innerHTML += `<div class="box boxHover">
        <div class="text">
        rgb(${r},${g},${b})
        </div>
        </div>`

    let box = document.querySelectorAll(".box")
    box[i].style.background = `rgb(${r},${g},${b})`




}
for (let i = 0; i < 180; i++) {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let r1 = Math.floor(Math.random() * 255);
    let g1 = Math.floor(Math.random() * 255);
    let b1 = Math.floor(Math.random() * 255);
    colors.innerHTML += `<div class="box1 boxHover">
        <div class="text1">
        linear-gradient(to bottom,rgb(${r},${g},${b}) ,rgb(${r1},${g1},${b1}))
        </div>
        </div>`
    let box1 = document.querySelectorAll(".box1")
    box1[i].style.background = `linear-gradient(to bottom,rgb(${r},${g},${b}) ,rgb(${r1},${g1},${b1}))`
}
let boxHover = document.querySelectorAll(".boxHover")
boxHover.forEach((b) => {
    b.addEventListener("click", (e) => {
        let audio = new Audio("rain_drop.mp3")
        audio.play()
        audio.currentTime = 0
        console.log(audio)
        let backgroundChange = e.target.textContent
        let testColor = document.querySelector(".testColor")

        let textColor = document.querySelector(".textColor")
        testColor.style.background = `${backgroundChange}`
        textColor.innerHTML = `${backgroundChange}`
    })
})


setInterval(() => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    document.head.childNodes[1].attributes[1].value = `rgb(${r},${g},${b})`


}, 1000)