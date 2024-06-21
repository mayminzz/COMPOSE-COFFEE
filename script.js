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

const gnbLists = document.querySelectorAll(".gnb > li");
const detailBox = document.querySelector(".gnb_detail");

gnbLists.forEach((gnbLi) => {
  gnbLi.addEventListener("mouseenter", () => {
    detailBox.classList.add("active");
    gnbLi.classList.add("active");
  });
  gnbLi.addEventListener("mouseleave", () => {
    gnbLi.classList.remove("active");
  });
  header.addEventListener("mouseleave", () => {
    detailBox.classList.remove("active");
  });
});

const languageBtn = document.querySelector(".language > span");
const selectList = document.querySelector(".select_list");

languageBtn.addEventListener("click", () => {
  languageBtn.classList.toggle("active");
  selectList.classList.toggle("drop");
});

const wholeMenuBtn = document.querySelector(".whole_menu_btn");
const wholeMenu = document.querySelector(".whole_menu_box");

wholeMenuBtn.addEventListener("click", () => {
  wholeMenu.classList.toggle("show");
  wholeMenuBtn.classList.toggle("active");
});

//history
const yearBtns = document.querySelectorAll(".year_btns > div");
const tabs = document.querySelectorAll(".history_tabs");

yearBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const targetYear = e.currentTarget.getAttribute("data-year");

    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    const targetTabs = document.querySelector(`[data-year="${targetYear}"]`);
    targetTabs.classList.add("active");

    yearBtns.forEach((btn) => {
      btn.classList.remove("on");
    });

    btn.classList.add("on");
  });
});

const slideContainer = document.querySelector(".year_btns");
const slides = slideContainer.querySelectorAll("div");
const slideCount = slides.length;

let currentIndex = 0;

const prevBtn = document.querySelector(".prev_btn");
const nextBtn = document.querySelector(".next_btn");
console.log(prevBtn, nextBtn);

const slider = (num) => {
  slideContainer.style.transform = `translateX(${num * -278.9}px)`;
  currentIndex = num;
};

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    slider(currentIndex - 1);
  } else {
    slider(slideCount - 4);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < slideCount - 4) {
    slider(currentIndex + 1);
  } else {
    slider(0);
  }
});
