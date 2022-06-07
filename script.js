async function renderRate(currency, rate) {
  const ul = document.querySelector('#currency-list');

  const li = document.createElement('li');
  li.innerHTML = `<b>${currency}:</b> ${rate.toFixed(2)}`

  ul.appendChild(li);
}

function handleRates(rates) {
  const ratesEntries = Object.entries(rates);

  ratesEntries.forEach((entry) => {
    const [currency, rate] = entry;
    renderRate(currency, rate);
  });
}

function renderBase(base) {
  const baseTitle = document.querySelector('#base')

  baseTitle.innerText = `Values referring to 1 ${base}`;
}

function clearCurrencyList() {
  const ul = document.querySelector('#currency-list');
  ul.innerHTML = '';
}

async function handleSearchEvent() {
  const currencyInput = document.querySelector('#currency-input');

  const value = currencyInput.value.toUpperCase();
  const { rates, base } = await fetchCurrencies(value);
  clearCurrencyList();
  handleRates(rates);
  renderBase(base);
}

function getCurrencies() {
  const searchButton = document.querySelector('#search-button');
  searchButton.addEventListener('click', handleSearchEvent);
}

async function start() {
  getCurrencies();
}

window.onload = start;