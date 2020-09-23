const display = document.querySelector('#display')
const billInput = document.querySelector('#bill')
const tipInput = document.querySelector('#tip')

billInput.addEventListener('input', calculateTip)
tipInput.addEventListener('input', calculateTip)

function calculateTip() {
    const billValue = billInput.value
    const tipValue = tipValue.value

    const tipAmount = billValue * tipValue / 100

    display.innerHTML = tipAmount.toFixed(2)
}

calculateTip();