var typed = new Typed(".text", {
  strings: ["ACHIEVER EMPIRE UNION", "ALIABAD"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

var typedd = new Typed(".logotext", {
  strings: ["ACHIEVER EMPIRE UNION"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

gsap.from(".co .ordination", {
  opacity: 0,
  duration: 1,
  x: 0,
  scrollTrigger: {
    trigger: ".co .ordination",
    start: "top 90%",
    scrub: true,
    opacity: 10,
  },
});

gsap.from(".do .w2", {
  opacity: 0,
  duration: 1,
  x: 0,
  scrollTrigger: {
    trigger: ".do .w2",
    start: "top 90%",
    scrub: true,
    opacity: 10,
  },
});

gsap.from(".do .w2", {
  opacity: 0,
  duration: 1,
  x: 0,
  scrollTrigger: {
    trigger: ".do .w2",
    start: "top 90%",
    scrub: true,
    opacity: 10,
  },
});

var coll = document.querySelector(".btt");
var nam = document.getElementById("#nam");
var email = document.getElementById("#emai");
var dis = document.getElementById("#dis");

coll.addEventListener("click", () => {
  if (nam & email & (dis == "")) {
    alert("Please fillup all fields");
    console.log("Banty");
  } else {
    alert("Thank you for contact with us");
  }
});
Ī;


// let btt = document.querySelector(".btt");
// let emai = document.querySelector("#emai");
// btt.addEventListener("mousehover", () => {
  
// });
