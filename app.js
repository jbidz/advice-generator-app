const URL = "https://api.adviceslip.com/advice";
const blockquote = document.getElementById("quote");
const adviceNumber = document.getElementById("number");
const card = document.querySelector(".card");
const loading = document.getElementById("loading");

window.addEventListener("load", async function () {
  const slip = await generateAdvice(URL);
  adviceNumber.textContent = slip.id;
  blockquote.textContent = slip.advice;
  loading.classList.add("hide");
  card.classList.add("show");
});

const button = addEventListener("click", async function (e) {
  const slip = await generateAdvice(URL);
  adviceNumber.textContent = slip.id;
  blockquote.textContent = slip.advice;
});

async function generateAdvice(url) {
  const request = await fetch(url);
  const data = await request.json();
  const id = data.slip.id;
  const advice = data.slip.advice;
  return {
    id,
    advice,
  };
}
