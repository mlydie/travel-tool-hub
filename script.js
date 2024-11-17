document.getElementById("calculate-distance").addEventListener("click", () => {
    const start = document.getElementById("start-location").value;
    const end = document.getElementById("end-location").value;
    alert(`This will calculate distance from ${start} to ${end} (API integration needed).`);
});

document.getElementById("convert-currency").addEventListener("click", async () => {
    const amount = document.getElementById("amount").value;
    const from = document.getElementById("from-currency").value;
    const to = document.getElementById("to-currency").value;
    const convertedAmount = await convertCurrency(amount, from, to);
    document.getElementById("conversion-result").innerText = `Converted Amount: ${convertedAmount} ${to}`;
});

// Example Currency Converter function
async function convertCurrency(amount, fromCurrency, toCurrency) {
    const apiKey = "YOUR_API_KEY";
    const url = `https://open.er-api.com/v6/latest/${fromCurrency}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        const rate = data.rates[toCurrency];
        const converted = amount * rate;
        return converted.toFixed(2);
    } catch (error) {
        console.error(error);
        return "Error fetching rates!";
    }
}
