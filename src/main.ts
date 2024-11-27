import "./style.css";
import hljs from "highlight.js"; // Імпорт highlight.js
import "highlight.js/styles/atom-one-dark.css"; // Тема (можна вибрати іншу з доступних)

document.addEventListener("DOMContentLoaded", () => {
  // Знаходимо всі <pre> теги та підсвічуємо код
  document.querySelectorAll(".code").forEach((block) => {
    hljs.highlightElement(block as HTMLElement);
  });
});
