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
