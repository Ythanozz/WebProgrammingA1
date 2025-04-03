document.addEventListener('DOMContentLoaded', function() {
    const priceInput = document.getElementById('perliter');
    const litersInput = document.getElementById('liters');
    const calculateBtn = document.getElementById('calculatebutton');
    const totalCostDisplay = document.getElementById('totalcost');

    // Calculate function
    function calculatetotalcost() {
        const pricePerLiter = parseFloat(priceInput.value);
        const liters = parseFloat(litersInput.value);
        
        if (isNaN(pricePerLiter) || isNaN(liters)) {
            alert('Please enter valid numbers');
            return;
        }
        
        if (pricePerLiter < 0 || liters < 0) {
            alert('Values cannot be negative');
            return;
        }
        
        const totalcost = pricePerLiter * liters;
        totalCostDisplay.textContent = Total cost: £${totalcost.toFixed(2)};
    }

    // calculates when button is clicked
    calculateBtn.addEventListener('click', calculatetotalcost);
});