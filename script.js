const getJokeBtn = document.getElementById("get-joke-btn");
const jokesList = document.querySelector(".jokesList");

// get Joke
async function fetchJoke() {
  const response = await fetch("https://v2.jokeapi.dev/joke/Any");
  const json = await response.json();
  if (json.type === "single") {
    appendJoke(json.joke);
  } else if (json.type === "twopart") {
    appendPunhJoke({
      setup: json.setup,
      delivery: json.delivery,
    });
  }
  console.log(json);
}

function appendJoke(data) {
  const li = document.createElement("li");
  li.innerHTML = data;
  li.classList.add("single");
  jokesList.appendChild(li);
}

function appendPunhJoke(data) {
  const puchJokeContainer = document.createElement("ul");
  puchJokeContainer.classList.add("twoPartJoke");
  jokesList.appendChild(puchJokeContainer);

  const setupLi = document.createElement("li");
  setupLi.innerHTML = data.setup;
  setupLi.classList.add("setUpJoke");
  puchJokeContainer.appendChild(setupLi);

  const deliveryLi = document.createElement("li");
  deliveryLi.innerHTML = data.delivery;
  deliveryLi.classList.add("deliveryJoke");
  puchJokeContainer.appendChild(deliveryLi);
}

getJokeBtn.addEventListener("click", fetchJoke);
