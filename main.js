function wethereOnScreen(city) {
  container.innerHTML = "";
  fetch(
    ` https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=12b7a7e272378638faa5c1aae11d1d9f&units=metric`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      // header.innerHTML += `<h1>${data.city.name}</h1>`;
      for (let i = 0; i < data.list.length - 3; i += 9) {
        container.innerHTML += `<div class="myDiv"><h2>date: ${
          data.list[i].dt_txt
        }</h2>
        <h3>temp: ${data.list[i].main.temp}</h3>
        <img src=${
          Number(data.list[i].main.temp) > 25
            ? "https://img.icons8.com/color/48/summer--v1.png"
            : "https://img.icons8.com/color/48/rain--v1.png"
        }>
        </div>
        `;
      }
    });
}
document.querySelector("#btn").addEventListener("click", () => {
  wethereOnScreen(myInput.value);
  myInput.value = "";
});
