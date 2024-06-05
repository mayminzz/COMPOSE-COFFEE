// header scroll
const header = document.querySelector("header");

let scrollNum = 0;
let documentHeight = 0;

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  if (scrollNum > 90) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

const gnb = document.querySelector(".gnb");

gnb.addEventListener("mouseenter", () => {
  gnb.classList.add("show");
  header.classList.add("active");
});
header.addEventListener("mouseleave", () => {
  gnb.classList.remove("show");
  header.classList.remove("active");
});

const gnbLists = document.querySelectorAll(".gnb > li");
console.log(gnbLists);
gnbLists.forEach((gnbLi) => {
  gnbLi.addEventListener("mouseenter", () => {
    gnbLi.classList.add("active");
  });
  gnbLi.addEventListener("mouseleave", () => {
    gnbLi.classList.remove("active");
  });
});
