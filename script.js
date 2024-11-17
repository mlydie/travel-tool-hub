// WEATHER API FUNCTIONALITY
async function getWeather() {
    const apiKey = "your_openweathermap_api_key"; // Replace with your actual API key
    const city = document.getElementById("city").value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("City not found!");
        }
        const data = await response.json();
        const weatherOutput = `
            <p><strong>City:</strong> ${data.name}</p>
            <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
            <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        `;
        document.getElementById("weather-output").innerHTML = weatherOutput;
    } catch (error) {
        document.getElementById("weather-output").innerHTML = `<p>${error.message}</p>`;
    }
}

// CURRENCY CONVERTER FUNCTIONALITY
async function convertCurrency() {
    const apiKey = "your_exchangerate_api_key"; // Replace with your actual API key
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("from-currency").value;
    const toCurrency = document.getElementById("to-currency").value;
    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const convertedAmount = (amount * data.conversion_rate).toFixed(2);
        document.getElementById("conversion-result").innerHTML = `
            <p>${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}</p>
        `;
    } catch (error) {
        document.getElementById("conversion-result").innerHTML = `<p>Error fetching conversion rate.</p>`;
    }
}
