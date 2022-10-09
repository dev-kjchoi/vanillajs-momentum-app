const form = document.getElementById("my-name");
const input = form.querySelector("input");
const button = form.querySelector("button");
const welcome = document.getElementById("welcome");

function showWelcome() {
  const myName = localStorage.getItem("myName");
  if (myName) {
    const h2 = welcome.querySelector("h2");
    h2.innerText = `환영합니다! ${myName}`;
    welcome.hidden = false;
    input.hidden = true;
    button.hidden = true;
  } else {
    welcome.hidden = true;
    input.hidden = false;
    button.hidden = false;
  }
}

function handleButtonClick(event) {
  event.preventDefault();
  const myName = input.value;
  localStorage.setItem("myName", myName);
  input.value = "";
  showWelcome();
}

form.addEventListener("submit", handleButtonClick);

showWelcome();
