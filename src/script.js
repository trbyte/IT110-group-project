const amountInput = document.getElementById('amount');
const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');
const convertBtn = document.getElementById('convert-btn');
const swapBtn = document.getElementById('swap-currencies');
const resultDisplay = document.getElementById('conversion-result');

// API URL
const API_URL = 'https://api.frankfurter.app';

// Load currencies
async function loadCurrencies() {
    console.log("Loading currencies...");
    try {
        const res = await fetch(`${API_URL}/currencies`);
        console.log("Fetch response:", res);
        const data = await res.json();
        console.log("Currencies data:", data);

        // Add currencies to dropdowns
        for (let code in data) {
            console.log("Adding currency:", code);
            let option1 = new Option(`${code} - ${data[code]}`, code);
            let option2 = new Option(`${code} - ${data[code]}`, code);

            fromCurrency.add(option1);
            toCurrency.add(option2);
        }

        // Set default currencies
        fromCurrency.value = 'USD';
        toCurrency.value = 'PHP';
    } catch (error) {
        console.error('Error loading currences: ', error);
    }
}

// Handles conversion
async function convertCurrency() {
    console.log("Convert button clicked");
    const amount = amountInput.value;
    const from = fromCurrency.value;
    const to = toCurrency.value;
    console.log("Inputs:", { amount, from, to });

    if (!amount || !from || !to) {
        console.warn("Missing input data");
        resultDisplay.textContent = '!! Please enter amount and select currencies !!';
        return;
    }

    try {
        const res = await fetch(`${API_URL}/latest?amount=${amount}&from=${from}&to=${to}`);
        console.log("Conversion fetch response:", res);
        const data = await res.json();
        console.log("Conversion result data:", data);
        const rate = data.rates[to];
        console.log("Calculated rate:", rate);

        resultDisplay.textContent = `${from} ${amount} = ${to} ${rate}`;
    } catch (error) {
        console.error('Error concerting currency: ', error);
        resultDisplay.textContent = '!! Conversion failed, please try again !!';
    }
}

// Swap currencies
function swapCurrencies() {
    const temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;
}

// Event listeners
convertBtn.addEventListener('click', convertCurrency);
swapBtn.addEventListener('click', swapCurrencies);


loadCurrencies();