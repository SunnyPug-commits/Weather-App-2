function displayTemperature(response) {
  console.log(response.data.temperature);
}

let query = "tokyo";

let apiKey = `17t909018ba21db35adf4700b4co23a4`;

let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}`;

axios.get(apiUrl).then(displayTemperature);
