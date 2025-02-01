//curse start
var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + 30 + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 150 + "px";
  blur.style.top = dets.y - 150 + "px";
});
//curse End

//Hero backgroud color start
gsap.to("#nav", {
  backgroundColor: "#000",
  height: "110px",
  duraton: 0.4,
  scrollTrigger: {
    trigger: "#nav",
    scrpller: "body",
    //markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 0.9,
  },
});

gsap.to("#main", {
  backgroundColor: "rgb(0, 0, 0)",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25",
    end: "top -70vh",
    scrub: 2,
  },
});

//Hero backgroud color end

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 2;
    crsr.style.border = "0.5px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95c11e";
    crsr.style.backgroundColor = "#95c11e";
  });
});


gsap.from("#about-us img,#about-us-in", {
  y: 90,
  opacity: 0,
  duraton: 2,
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#page1",
    scroller: "body",
    // markers: true,
    start: "top -40%",
    end: "top -15%",
    scrub: 4,
  },
});

gsap.from(".card", {
  scale:0.8,
  opacity: 0,
  duraton: 3,
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#page1",
    scroller: "body",
    // markers: true,
    start: "top -70%",
    end: "top -65%",
    scrub: 4,
  },
});