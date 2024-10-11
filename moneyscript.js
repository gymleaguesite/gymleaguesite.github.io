const powerUps = [
    { name: 'Cheap Body Oil', duration: 3, cost: 525 },
    { name: 'Shiny Oil', duration: 5, cost: 100 },
    { name: 'Premium Body Oil', duration: 15, cost: 3750 },
    { name: 'Small Money Potion', duration: 15, cost: 15000 },
    { name: 'Cash Fruit', duration: 10, cost: 135000 },
    { name: 'Toning Fruit', duration: 10, cost: 172000 },
    { name: 'Ramen', duration: 10, cost: 262000 }
];

document.getElementById('selectAll').addEventListener('change', function() {
    const checkboxes = document.querySelectorAll('#timeForm input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = this.checked;
    });
});

function calculateByTime() {
    const trainingTime = parseFloat(document.getElementById('trainingTime').value) * 60; // Convert to minutes
    const selectedPowerUps = Array.from(document.querySelectorAll('#timeForm input[type="checkbox"]:checked')).map(input => input.value);

    let results = '<h3>Result for selected power-ups and training time:</h3><div class="table-container"><table border="1"><tr><th>Name</th><th>Amount</th><th>Price ($)</th></tr>';
    let totalCost = 0;

    powerUps.forEach(powerUp => {
        if (selectedPowerUps.includes(powerUp.name)) {
            const quantity = Math.ceil(trainingTime / powerUp.duration);
            const cost = quantity * powerUp.cost;
            totalCost += cost;

            results += `<tr><td>${powerUp.name}</td><td>${quantity.toLocaleString()}</td><td>${cost.toLocaleString()}</td></tr>`;
        }
    });

    results += `<tr><td colspan="2">Total cost</td><td>${totalCost.toLocaleString()}</td></tr></table></div>`;
    document.getElementById('timeResults').innerHTML = results;
}
