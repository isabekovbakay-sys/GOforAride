// --- Фоновые эмодзи ---
const bg = document.getElementById("emoji-bg");
const emojis = ["🚲","🦔","✨","🎉","🌙","🚴‍♀️","😁"];
for (let i = 0; i < 40; i++) {
  const span = document.createElement("span");
  span.className = "emoji";
  span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  span.style.left = Math.random() * 100 + "vw";
  span.style.animationDuration = 5 + Math.random() * 10 + "s";
  span.style.fontSize = 1 + Math.random() * 2 + "rem";
  bg.appendChild(span);
}

// --- Кнопка "Скопировать ссылку" ---
const copyBtn = document.getElementById("copyBtn");
const tgLink = "https://t.me/bakai_i";

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(tgLink);
    copyBtn.textContent = "Ссылка скопирована ✅";
    setTimeout(() => copyBtn.textContent = "Скопировать ссылку", 2000);
  } catch (e) {
    alert("Не удалось скопировать. Ссылка: " + tgLink);
  }
});
