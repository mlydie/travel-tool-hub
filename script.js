// script.js

// Trip Budget Calculator
document.getElementById("budget-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const totalCost = parseFloat(document.getElementById("total-cost").value);
    const tripDuration = parseInt(document.getElementById("trip-duration").value);

    if (totalCost > 0 && tripDuration > 0) {
        const dailyBudget = (totalCost / tripDuration).toFixed(2);
        document.getElementById("budget-result").textContent = `Daily Budget: $${dailyBudget}`;
    } else {
        document.getElementById("budget-result").textContent = "Please enter valid values.";
    }
});

// Carbon Footprint Offset Calculator
document.getElementById("carbon-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const flightDistance = parseFloat(document.getElementById("flight-distance").value);
    const offsetRate = parseFloat(document.getElementById("offset-rate").value);

    if (flightDistance > 0 && offsetRate > 0) {
        const offsetCost = (flightDistance * offsetRate).toFixed(2);
        document.getElementById("carbon-result").textContent = `Carbon Offset Cost: $${offsetCost}`;
    } else {
        document.getElementById("carbon-result").textContent = "Please enter valid values.";
    }
});
