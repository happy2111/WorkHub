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
