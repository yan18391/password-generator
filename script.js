// Получение элементов DOM
const passwordBox = document.getElementById("Password");
const length = 12;

// Импорт функции генерации пароля
import { generatePassword } from './generate.js'; 

// Функция копирования пароля
function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}

// Привязка функций к событиям (если у вас есть кнопки)
const generateButton = document.getElementById("generateButton"); //  Пример
const copyButton = document.getElementById("copyButton"); // Пример

if (generateButton) {
  generateButton.addEventListener("click", generatePassword); 
}

if (copyButton) {
  copyButton.addEventListener("click", copyPassword);
} 