function page1Animation() {
  var tl = gsap.timeline();

  tl.from("nav h1, nav h4, nav button", {
    y: -20,
    duration: 0.6,
    opacity: 0,
    stagger: 0.1,
  });
  tl.from(".center-part1 h1", {
    x: -200,
    duration: 0.5,
    opacity: 0,
  });
  tl.from(".center-part1 p", {
    x: -100,
    duration: 0.4,
    opacity: 0,
  });
  tl.from(
    ".center-part1 button",
    {
      opacity: 0,
      duration: 0.3,
    },
    "-=0.4"
  );
  tl.from(
    ".center-part2 img",
    {
      duration: 0.5,
      x: 200,
      opacity: 0,
    },
    "-=0.5"
  );
  tl.from(".section1-bottom img", {
    opacity: 0,
    y: 30,
    stagger: 0.13,
    duration: 0.4,
  });
}

function page2Animation() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      start: "top 50%",
      end: "top -60%",
      scrub: 2,
    },
  });

  tl2.from(".services", {
    y: 30,
    duration: 0.3,
    opacity: 0,
  });

  tl2.from(
    ".elem.line1.left",
    {
      x: -300,
      opacity: 0,
      duration: 0.5,
    },
    "anim1"
  );

  tl2.from(
    ".elem.line1.right",
    {
      x: 300,
      opacity: 0,
      duration: 0.5,
    },
    "anim1"
  );

  tl2.from(
    ".elem.line2.left",
    {
      x: -300,
      opacity: 0,
      duration: 0.5,
    },
    "anim2"
  );

  tl2.from(
    ".elem.line2.right",
    {
      x: 300,
      opacity: 0,
      duration: 0.5,
    },
    "anim2"
  );

  tl2.from(
    ".elem.line3.left",
    {
      x: -300,
      opacity: 0,
      duration: 0.5,
    },
    "anim3"
  );

  tl2.from(
    ".elem.line3.right",
    {
      x: 300,
      opacity: 0,
      duration: 0.5,
    },
    "anim3"
  );

  tl2.from(
    ".elem.line4.left",
    {
      x: -300,
      opacity: 0,
      duration: 0.5,
    },
    "anim4"
  );

  tl2.from(
    ".elem.line4.right",
    {
      x: 300,
      opacity: 0,
      duration: 0.5,
    },
    "anim4"
  );
}

page1Animation();
page2Animation();
