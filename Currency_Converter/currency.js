const currencies = [
    "USD", "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG",
    "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB",
    "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP",
    "CNY", "COP", "CRC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD",
    "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "FOK", "GBP", "GEL", "GGP",
    "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG",
    "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD",
    "JOD", "JPY", "KES", "KGS", "KHR", "KID", "KMF", "KRW", "KWD", "KYD",
    "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA",
    "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR",
    "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN",
    "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF",
    "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLE", "SLL", "SOS",
    "SRD", "SSP", "STN", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP",
    "TRY", "TTD", "TVD", "TWD", "TZS", "UAH", "UGX", "UYU", "UZS", "VES",
    "VND", "VUV", "WST", "XAF", "XCD", "XDR", "XOF", "XPF", "YER", "ZAR",
    "ZMW", "ZWL"
  ];
  
  function currencyOptions() {
    const fromCurrencySelect = document.getElementById('from-currency');
    const toCurrencySelect = document.getElementById('to-currency');
  
    currencies.forEach(currency => {
      const fromOption = document.createElement('option');
      fromOption.value = currency;
      fromOption.textContent = currency;
      fromCurrencySelect.appendChild(fromOption);
  
      const toOption = document.createElement('option');
      toOption.value = currency;
      toOption.textContent = currency;
      toCurrencySelect.appendChild(toOption);
    });
  }
  
  // Convert function
  function convert(event) {
    event.preventDefault();
    const from_currency = document.getElementById('from-currency').value;
    const to_currency = document.getElementById('to-currency').value;
    const amt = parseFloat(document.getElementById('amt').value);
    const converted_amt_display = document.getElementById('converted-amount');
  
    fetch(`https://v6.exchangerate-api.com/v6/988be454037331b86b013db8/latest/${from_currency}`)
      .then(response => response.json())
      .then(data => {
        const multiply_value = data.conversion_rates[to_currency];
        const converted_amt = amt * multiply_value;
        converted_amt_display.textContent = `${converted_amt.toFixed(2)} ${to_currency}`; // Displaying the converted amount
      })
      .catch(error => console.error('Error:', error));
  }
  window.onload = currencyOptions;
  document.querySelector("#convert-btn").addEventListener("click", convert);
  