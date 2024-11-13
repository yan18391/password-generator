const passwordBox = document.getElementById("Password")
const length = 12


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = "@#$%^&()_+|{}[]<>/-="

const allChars = upperCase + lowerCase + number + symbol

function createPassword() {
    let password = ""
    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password += number[Math.floor(Math.random() * number.length)]
    password += symbol[Math.floor(Math.random() * symbol.length)]

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }
    passwordBox.value = password
}

function copyPassword() {
    passwordBox.select()
    document.execCommand("copy")
}

function generateUsername(length = 8) {
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    let username = "";
    for (let i = 0; i < length; i++) {
      username += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return username;
  }

  const generateUsernameButton = document.createElement('button');
  generateUsernameButton.textContent = 'Сгенерировать имя пользователя';
  generateUsernameButton.id = 'generateUsernameButton';
  generateUsernameButton.addEventListener('click', () => {
    const username = generateUsername();
    alert(`Сгенерированное имя пользователя: ${username}`);
  });
  document.body.appendChild(generateUsernameButton);




