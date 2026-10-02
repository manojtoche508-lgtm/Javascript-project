function getWeather() {

    const city = document.getElementById("cityInput").value;

    if (city === "") {

        document.getElementById("weatherResult").innerHTML =
            "<p>Please select a city.</p>";

        return;
    }

    const apiKey = "46741203ca0a4ef0958103535252907";

    const apiUrl =
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    fetch(apiUrl)

        .then(response => response.json())

        .then(data => {

            if (data.location) {

                const weatherInfo = `
                    
                    <h3>
                        ${data.location.name},
                        ${data.location.country}
                    </h3>

                    <p>
                        <strong>Temperature:</strong>
                        ${data.current.temp_c}°C
                    </p>

                    <p>
                        <strong>Condition:</strong>
                        ${data.current.condition.text}
                    </p>

                    <p>
                        <strong>Humidity:</strong>
                        ${data.current.humidity}%
                    </p>

                    <img 
                        src="https:${data.current.condition.icon}" 
                        alt="Weather icon"
                    >

                `;

                document.getElementById("weatherResult").innerHTML =
                    weatherInfo;

            } else {

                document.getElementById("weatherResult").innerHTML =
                    "<p>City not found!</p>";

            }

        })

        .catch(error => {

            console.error("Error fetching weather data:", error);

            document.getElementById("weatherResult").innerHTML =
                "<p>Error fetching weather data.</p>";

        });
}