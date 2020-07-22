const btnSubmit = document.getElementById("submit1");
const cityName = document.getElementById("userinput");

let body = document.querySelector("body");
let ul = document.querySelector("ul");

const apiKey = "c65dee63b1543ccd79345b5fdaa81ee6";
const city = cityName.value;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}=metric`;

function inputLength() {
  return city.length;
}
function createListElements() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let h2 = document.createElement("h2");
      h2.appendChild(document.createTextNode(data.name + "_" + "Weather"));
      body.appendChild(h2);
      const temp = document.getElementById("temperature");
      temp.appendChild(
        document.createTextNode(Math.floor(data.main.temp) + "-" + "kelvin")
      );
      body.appendChild(temp);

      const windspeed = document.getElementById("windSpeed");

      windspeed.appendChild(
        document.createTextNode(
          Math.floor((data.wind.speed * 10) / 36) + "-" + "m / s"
        )
      );
      body.appendChild(windspeed);
      const cloud = document.getElementById("cloud");
      cloud.appendChild(document.createTextNode(Math.floor(data.clouds.all)));

      body.appendChild(cloud);

      const timestamp = data.sys.sunrise;
      const sunrise = new Date(timestamp * 1000);
      const timestampTwo = data.sys.sunset;
      const sunset = new Date(timestampTwo * 1000);
      const morning = document.getElementById("sunrise");
      const evening = document.getElementById("sunset");

      morning.appendChild(document.createTextNode(`Sunrise:  ${sunrise} `));
      body.appendChild(morning);

      evening.appendChild(document.createTextNode(`Sunsets:   ${sunset} `));
      body.appendChild(evening);
    })
    .catch(() => {});
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElements();
  }
}
btnSubmit.addEventListener("click", addListAfterClick);
