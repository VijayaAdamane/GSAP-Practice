// gsap.to("#page2 h1", {
//     transform: "translate(-150%)",
//     scrollTrigger : {
//         trigger: "#page2",
//         scroller:"body",
//         markers:true,
//         start:"top 0%",
//         end: "top -150%",
//         scrub:2,
//         pin:true

//     }
// })

var initialPath = `M 10 100 Q 500 100 990 100`;

var finalPath = `M 10 100 Q 500 100 990 100`;

var string = document.querySelector("#string");

string.addEventListener("mousemove", function (dets) {
  var path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;
  gsap.to("svg path", {
    attr: {d: path,},
    duration:0,
    ease:"power3.out",
  });
});

string.addEventListener("mouseleave", function(){
    gsap.to("svg path", {
        attr:{d: finalPath},
        duration: 1.5,
        ease: "elastic.out(1,0.2)",
    })
})
