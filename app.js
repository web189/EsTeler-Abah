const audio = document.getElementById("musik");
const btn = document.getElementById("musicBtn");

function toggleMusic() {
  if (audio.paused) {
    audio.play();
    btn.textContent = "⏸ Pause";
  } else {
    audio.pause();
    btn.textContent = "▶ Play";
  }
}

audio.addEventListener("ended", () => {
  btn.textContent = "▶ Play";
});

function order(product) {
  const phone = "6283895744805";
  const msg = `Halo, saya mau pesan ${product}`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank");
}