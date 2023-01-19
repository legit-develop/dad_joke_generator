const btnEl = document.getElementById("btn");
const jokeText = document.getElementById("joke");

const apiKey = "V7aqF5COHMcp3MVAmbpBMw==IB3tbbQ8XyWqC9M7";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  jokeText.innerText = "updating...";
  btnEl.disabled = true;
  btnEl.innerText = "updating...".toLowerCase();
  const response = await fetch(apiURL, options);
  const data = await response.json();
  btnEl.disabled = false;
  btnEl.innerText = "Tell me a joke";
  jokeText.innerText = data[0].joke;
}

btnEl.addEventListener("click", getJoke);
