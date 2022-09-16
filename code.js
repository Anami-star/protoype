let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

function dateHour(dateE) {
  let date = dateE.getDate();
  let hours = dateE.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = dateE.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = ["Sun", "Mon", "Tue", "Wend", "Thur", "Fri", "Sat"];

  let day = days[dateE.getDay()];

  return `${day} ${date}, ${hours}:${minutes}`;
}

let current = new Date();
let h4 = document.querySelector("h4");
h4.innerHTML = dateHour(current);

//when write city and change in info at the same time
/*function changeCity() {
  let show = document.querySelector(`#exampleInputText1`);
  let h1 = document.querySelector("h1");
  h1.innerHTML`${show.value}`;
}*/

function search(event) {
  event.preventDefault;
  let cityElement = document.querySelector("#thisCity");
  cityElement.innerHTML = city.value;
  let city = document.querySelector("#search-query");
}
let searchForm = document.querySelector("#searchCity");
searchForm.addEventListener("submit", search);

//let cityElement = document.querySelector("#thisCity");
//cityElement.innerHTML("new city");

/*function power() {
  let show = document.querySelector(`exampleInputText1`);

  document.getElementById(`thisCity`).innerHTML = `${show}`;
}
let form = document.querySelector("#searchCity");
form.addEventListener("submit", power);

//Display a fake temperature (i.e 17) in Celsius and add a link to convert it to Fahrenheit. When clicking on it, it should convert the temperature to Fahrenheit. When clicking on Celsius, it should convert it back to Celsius.

function conversion(event) {
  event.preventDefault;
  let toF = document.querySelector("#farenheit");
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML`${toF}`;
}
let changeTemperature = document.querySelector("#celsiuslink");
changeTemperature.addEventListener("click", conversion);/*/
