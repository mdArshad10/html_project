console.log("hi this is console of javascript");

let crs = document.querySelector("#mouseCursor");

document.addEventListener("mousemove", (detl) => {
  crs.style.top = detl.y + "px";
  crs.style.left = detl.x + "px";
});

gsap.to("nav", {
  backgroundColor: `#000`,
  height: "120px",

  scrollTrigger: {
    trigger: "nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 2,
  },
});

gsap.to("#main", {
  backgroundColor: `#000`,

  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    markers: true,
    start: "top -50vh",
    end: "top -80vh",
    scrub: 2,
  },
});
