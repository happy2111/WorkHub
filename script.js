const toggleButton = document.getElementById("close");
const adv_list = document.getElementById("adv_list");
function toggleClose() {
  adv_list.classList.toggle("active");
  toggleButton.classList.toggle("rotate");
}

const video = document.getElementById("myVideo");

video.addEventListener("click", () => {
  if (video.paused) {
    video.play(); // Запуск видео
  } else {
    video.pause(); // Пауза
  }
});

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});


const link_closer = document.querySelectorAll(".nav-link");
const offcanvas = document.getElementById("offcanvasDarkNavbar");
const body = document.body

link_closer.forEach((i) => {
  i.addEventListener("click", () => {
    offcanvas.classList.remove("show")
    // offcanvas.setAttribute("data-bs-backdrop", "false");
  });
});

if (offcanvas.classList.contains("show")) {
  body.classList.toggle("active")
}else {
  body.classList.toggle("active");
  body.style.padding = "0px !important";
}
