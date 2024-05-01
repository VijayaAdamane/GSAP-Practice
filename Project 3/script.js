var h1 = document.querySelector("h1");
var h1Text = h1.textContent;

function breakText() {
  // Text ko toda hai
  var splittedText = h1Text.split("");
  var halfValue = splittedText.length / 2;
  var clutter = "";

  splittedText.forEach(function (e, idx) {
    if (idx < halfValue) clutter += `<span class="a">${e}</span>`;
    else clutter += `<span class="b">${e}</span>`;
  });
  h1.innerHTML = clutter;
}

breakText();

gsap.from("h1 .a", {
  y: 60,
  delay: 0.5,
  duration: 0.5,
  stagger: 0.15,
});

gsap.from("h1 .b", {
  y: 60,
  delay: 0.5,
  duration: 0.5,
  stagger: -0.11,
});
