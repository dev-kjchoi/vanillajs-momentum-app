const clock = document.getElementById("clock");
const h3 = clock.querySelector("h3");
const h1 = clock.querySelector("h1");

function getTime() {
  const date = new Date();
  h3.innerText = `${date.getFullYear()}년 ${String(date.getMonth()+1).padStart(2, "0")}월 ${String(date.getDate()).padStart(2, "0")}일`;
  h1.innerText = `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`;
}

getTime();
setInterval(getTime, 1000);
