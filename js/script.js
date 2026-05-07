// mobile menu
const mbMenuBtn = document.querySelector(".mb-menu-btn");
const mbCloseBtn = document.querySelector(".mb-close-btn");
const mbMenulist = document.querySelector(".mb-menu-list");
// console.log(mbMenuBtn, mbCloseBtn, mbMenulist);
mbMenuBtn.addEventListener("click", (e) => {
  e.preventDefault(); // 기본 동작 방지
  console.log("모바일 메뉴 버튼 클릭");

  mbMenuBtn.style.display = "none";
  mbCloseBtn.style.display = "block";
  mbMenulist.style.display = "flex";
});

mbCloseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("모바일 메뉴 달기 버튼 클릭");

  mbMenuBtn.style.display = "block";
  mbCloseBtn.style.display = "none";
  mbMenulist.style.display = "none";
});

// 무드겟 이미지 슬라이드
const moodgetImages = [
  "assets/images/moodget_splash.png",
  "assets/images/moodget_onboarding.png",
  "assets/images/moodget_home.png",
];

const moodgetScreens = document.querySelectorAll(".moodget-screen");

let moodgetIndex = 0;
let activeMoodget = 0;

moodgetImages.forEach((src) => {
  const img = new Image();
  img.src = src;
});

if (moodgetScreens.length === 2) {
  setInterval(() => {
    const currentScreen = moodgetScreens[activeMoodget];
    const nextScreen = moodgetScreens[1 - activeMoodget];

    moodgetIndex = (moodgetIndex + 1) % moodgetImages.length;

    nextScreen.src = moodgetImages[moodgetIndex];

    currentScreen.classList.remove("active");
    nextScreen.classList.add("active");

    activeMoodget = 1 - activeMoodget;
  }, 3000);
}

// 쩝쩝박사 이미지 슬라이드
const jjupImages = [
  "assets/images/splash.png",
  "assets/images/home.png",
  "assets/images/map.png",
  "assets/images/character.png",
];

const jjupScreens = document.querySelectorAll(".jjup-screen");

let jjupIndex = 0;
let activeJjup = 0;

jjupImages.forEach((src) => {
  const img = new Image();
  img.src = src;
});

if (jjupScreens.length === 2) {
  setInterval(() => {
    const currentScreen = jjupScreens[activeJjup];
    const nextScreen = jjupScreens[1 - activeJjup];

    jjupIndex = (jjupIndex + 1) % jjupImages.length;

    nextScreen.src = jjupImages[jjupIndex];

    currentScreen.classList.remove("active");
    nextScreen.classList.add("active");

    activeJjup = 1 - activeJjup;
  }, 3000);
}
