var menu = document.querySelector("#nav i")
var cross = document.querySelector("#full i")

var ti = gsap.timeline()

ti.to("#full", {
    right:0,
    duration:0.3,
})
ti.from("#full h4", {
    x:150,
    duration:0.3,
    stagger: 0.25,
    opacity : 0,

})
ti.from("#full i", {
    opacity : 0
})

ti.pause()


menu.addEventListener("click", function(){
    ti.play()
})

cross.addEventListener("click", function(){
    ti.reverse()
})
















