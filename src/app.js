// Get HTML elements
const amountInput = document.getElementById('amount');
const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');
const convertBtn = document.getElementById('convert-btn');
const swapBtn = document.getElementById('swap-currencies');
const resultDisplay = document.getElementById('conversion-result');
const conversionResultContainer = document.getElementById('result-display');

// API URL
const API_URL = 'https://api.frankfurter.app';

// Loads all currencies into the dropdowns
async function loadCurrencies() {
    console.log("Loading currencies...");
    try {
        // Fetch currencies from API
        const res = await fetch(`${API_URL}/currencies`);
        const data = await res.json();

        // Sort currencies alphabetically
        const sortedCodes = Object.keys(data).sort();

        // Add currencies to dropdowns
        for (let code of sortedCodes) {
            let option1 = new Option(`${code} - ${data[code]}`, code);
            let option2 = new Option(`${code} - ${data[code]}`, code);

            fromCurrency.add(option1);
            toCurrency.add(option2);
        }

        // Set default currencies
        fromCurrency.value = 'USD';
        toCurrency.value = 'PHP';
    } catch (error) {
        console.error('Error loading currencies: ', error);
        resultDisplay.textContent = 'Failed to load currencies. Please refresh.';
        conversionResultContainer.style.display = 'block';
    }
}

// Handles conversion
async function convertCurrency() {
    console.log("Convert button clicked");
    
    // Get values from user inputs
    const amount = amountInput.value;
    const from = fromCurrency.value;
    const to = toCurrency.value;

    // Validates inputs
    if (!amount || amount <= 0) {
        resultDisplay.textContent = 'Please enter a valid amount greater than 0.';
        conversionResultContainer.style.display = 'block';
        return;
    }

    if (from === to) {
        resultDisplay.textContent = 'Please choose two different currencies.';
        conversionResultContainer.style.display = 'block';
        return;
    }

    // Fetch conversion rate
    try {
        const res = await fetch(`${API_URL}/latest?amount=${amount}&from=${from}&to=${to}`);
        const data = await res.json();
        
        // Get converted rate
        const rate = data.rates[to];

        // Display result
        resultDisplay.textContent = `${from} ${amount} = ${to} ${rate}`;
        conversionResultContainer.style.display = 'block';
    } catch (error) {
        console.error('Error converting currency: ', error);
        resultDisplay.textContent = 'Conversion failed, please try again';
        conversionResultContainer.style.display = 'block';
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

// Load currencies when the page starts
loadCurrencies();