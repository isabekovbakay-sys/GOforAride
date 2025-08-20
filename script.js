const TELEGRAM_DEFAULT = "https://t.me/bakai_i";
const bg = document.getElementById("background");
const hintEl = document.getElementById("hint");
const copyBtn = document.getElementById("copyBtn");

// Определяем ссылку
let tgLink = TELEGRAM_DEFAULT;
try {
  const url = new URL(window.location.href);
  const v = url.searchParams.get("link");
  if (v && (v.startsWith("https://t.me/") || v.startsWith("tg://"))) {
    tgLink = v;
  }
} catch (e) {}

// Переназначаем href для кнопок
document.querySelectorAll("a[href*='t.me']").forEach(a => a.href = tgLink);

// Копирование
copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(tgLink);
    hintEl.textContent = "Ссылка скопирована ✅";
  } catch (e) {
    hintEl.textContent = "Не удалось скопировать. Нажми правой кнопкой → Копировать ссылку.";
  }
  setTimeout(() => { hintEl.textContent = ""; }, 3000);
});

// Эмодзи для фона
const emojis = ["🚲","✨","🎉","🦔","😄","🌙"];
const count = 40;

for (let i = 0; i < count; i++) {
  const span = document.createElement("span");
  span.className = "emoji";
  span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  span.style.left = Math.random() * 100 + "vw";
  span.style.fontSize = (Math.random() * 1.5 + 1) + "rem";
  const duration = Math.random() * 10 + 8;
  const delay = Math.random() * 10;
  span.style.animationDuration = duration + "s";
  span.style.animationDelay = delay + "s";
  bg.appendChild(span);
}
