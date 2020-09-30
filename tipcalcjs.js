



const display = document.querySelector('#display')
const billInput = document.querySelector('#bill')
const tipInput = document.querySelector('#tip')
const peopleInput = document.querySelector('#people')
const tipPaid = document.querySelector('#tipAmount')
const submitButton = document.querySelector('#button')




    billInput.addEventListener('input', calculateTip)
    tipInput.addEventListener('input', calculateTip)
    peopleInput.addEventListener('input', calculateTip)



function calculateTip() {
    const peopleValue = parseFloat(peopleInput.value)
    const billValue = parseFloat(billInput.value)
    const tipValue = parseFloat(tipInput.value)

    
    const tipAmount = billValue *tipValue / 100;
    const billAmount = (tipAmount + billValue) /peopleValue;

    tipPaid.innerHTML = tipAmount.toFixed(2)
    display.innerHTML = billAmount.toFixed(2)
    

  

}


submitButton.addEventListener('click', function() {
    calculateTip()
})