import dadJoke from "./second";
import "./styles/main.scss";
import laugh from "./assets/laugh.svg";

console.log("Hello, World!");

console.log(dadJoke());

console.log("This is a webpack practice project.");

const img = document.querySelector("#laugh");

img.src = laugh;

const jokeButton = document.querySelector("#jokeGenerator");

jokeButton.addEventListener("click", () => {
  dadJoke();
});
