



const display = document.querySelector('#display')
const billInput = document.querySelector('#bill')
const tipInput = document.querySelector('#tip')
const tipPaid = document.querySelector('#tipAmount')



billInput.addEventListener('input', calculateTip)
tipInput.addEventListener('input', calculateTip)



function calculateTip() {
    
    const billValue = parseFloat(billInput.value)
    const tipValue = parseFloat(tipInput.value)

    const tipAmount = (billValue *tipValue) / 100;
    const billAmount = parseFloat(tipAmount) + parseFloat(billInput.value);

    tipPaid.innerHTML = tipAmount.toFixed(2)
    display.innerHTML = billAmount

    console.log(billValue)
    console.log(tipValue)

    console.log(tipAmount)
    console.log(billAmount)

}



calculateTip();