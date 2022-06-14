const bar = document.querySelector(".bars");
const left = document.querySelector(".left");
const para = document.querySelector(".left .bars p");
const list = document.querySelector(".list");
const page = document.querySelector(".page");

const footer = document.querySelectorAll(".footer");

bar.addEventListener("click", () => {
  left.classList.toggle("active");
  para.classList.toggle("active");
  list.classList.toggle("active");
  page.classList.toggle("active");
});

footer.forEach(function (down) {
  const dropDown = down.querySelector(".dropdown");
  const dropbox = down.querySelector(".dropbox");
  dropDown.addEventListener("click", function () {
    const up = dropDown.querySelector(".up");
    const down = dropDown.querySelector(".down");
    up.classList.toggle("active");
    down.classList.toggle("active");
    dropbox.classList.toggle("active");
  });
});
