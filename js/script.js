// 새로고침 시 항상 맨 위에서 시작
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

// mobile menu
const mbMenuBtn = document.querySelector(".mb-menu-btn");
const mbCloseBtn = document.querySelector(".mb-close-btn");
const mbMenulist = document.querySelector(".mb-menu-list");

mbMenuBtn.addEventListener("click", (e) => {
  e.preventDefault();
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

// custom cursor
const customCursor = document.querySelector(".custom-cursor");

if (customCursor) {
  document.addEventListener("mousemove", (e) => {
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;
  });

  const navCursorTargets = document.querySelectorAll(
    ".logo a, .menu-list a, .mb-menu-list a",
  );

  navCursorTargets.forEach((target) => {
    target.addEventListener("mouseenter", () => {
      customCursor.classList.add("active");
    });

    target.addEventListener("mouseleave", () => {
      customCursor.classList.remove("active");
    });
  });
}

// scroll reveal title
const revealTitles = document.querySelectorAll(".reveal-title");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.35,
  },
);

revealTitles.forEach((title) => {
  revealObserver.observe(title);
});

// moodget 이미지 슬라이드
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

// design tab
const designTabButtons = document.querySelectorAll(".design-tab-btn");
const designPanels = document.querySelectorAll(".design-panel");

designTabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.target;

    designTabButtons.forEach((btn) => btn.classList.remove("active"));
    designPanels.forEach((panel) => panel.classList.remove("active"));

    button.classList.add("active");

    const targetPanel = document.getElementById(target);
    if (targetPanel) {
      targetPanel.classList.add("active");
    }
  });
});

function openImageModal(imageSrc) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");

  modalImage.src = imageSrc;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeImageModal() {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");

  modal.classList.remove("active");
  modalImage.src = "";
  document.body.style.overflow = "";
}

const imageModal = document.getElementById("imageModal");

if (imageModal) {
  imageModal.addEventListener("click", (e) => {
    if (e.target === imageModal) {
      closeImageModal();
    }
  });
}
