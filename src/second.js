import axios from "axios";

function dadJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  axios
    .get("https://icanhazdadjoke.com/", config)
    .then((response) => {
      if (!response.data.joke) {
        document.querySelector("#joke").innerHTML =
          "No joke found. Please try again.";
        return;
      }

      document.querySelector("#joke").innerHTML = response.data.joke;
    })
    .catch((error) => {
      console.error(error);
    });
}

export default dadJoke;
