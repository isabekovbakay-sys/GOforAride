const copyBtn = document.getElementById("copyBtn");
const hint = document.getElementById("hint");
const link = "https://t.me/bakai_i";

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(link);
    hint.textContent = "Ссылка скопирована!";
  } catch (err) {
    hint.textContent = "Не удалось скопировать. Кликни правой кнопкой → копировать ссылку.";
  }
  setTimeout(() => (hint.textContent = ""), 3000);
});
