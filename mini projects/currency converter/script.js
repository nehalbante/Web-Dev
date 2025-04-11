const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const amountInput = document.getElementById('amount');
const resultInput = document.getElementById('result');

amountInput.addEventListener('input', () => {
    const amount = parseFloat(amountInput.value);
    const from = fromCurrency.value;
    const to = toCurrency.value;

    if (isNaN(amount)) {
        resultInput.value = '';
        return;
    }

    fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
        .then(response => response.json())
        .then(data => {
            const rate = data.rates[to];
            if (rate === undefined) {
                resultInput.value = 'Error: Could not find exchange rate';
                return;
            }
            const result = (amount * rate).toFixed(2);
            resultInput.value = result;
        })
        .catch(error => {
            console.error('Error fetching exchange rate:', error);
            resultInput.value = 'Error fetching exchange rate';
        });
});

toCurrency.addEventListener('change', () => {
    amountInput.dispatchEvent(new Event('input'));
});
