const btn = document.querySelector("button");
const img = document.querySelector("img");
const URL = "https://dog.ceo/api/breeds/image/random";

// fetch(URL).then(res => console.log(res)).catch(er => console.error(er));
fetch(URL)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((er) => console.error(er));

btn.addEventListener("click", () => {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => img.setAttribute("src", data.message))
    .catch((er) => console.error(er));
});
