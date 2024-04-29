var main = document.querySelector('#main')
var cursor = document.querySelector('#cursor')
var imagediv = document.querySelector("#image")

main.addEventListener("mousemove" , function(dets){
    gsap.to("#cursor", {
      
        x: dets.x,
        y : dets.y,
        duration:0.5,
        ease: "back.out",

    })
})

imagediv.addEventListener("mouseenter", function(){
    cursor.innerHTML = "View More";
    gsap.to(cursor, {
        scale:2.5,
        backgroundColor: "#ffeeee",
        boxShadow: "0 0 1em 0.1em #EA0E11",
    })
})


imagediv.addEventListener("mouseleave", function(){
    cursor.innerHTML = ""
    gsap.to(cursor, {
        scale:1,
        backgroundColor:"white",
        boxShadow : "none"
    })
})
