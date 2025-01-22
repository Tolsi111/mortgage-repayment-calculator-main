// Amount input
const amountInput = document.getElementById("amount");

amountInput.addEventListener('focus', () => {
    const elem = document.getElementById("amountInputContainer")
    elem.classList.add("focused");
})

amountInput.addEventListener('blur', () => {
    const elem = document.getElementById("amountInputContainer")
    elem.classList.remove("focused");
})

// Term input
const termInput = document.getElementById("term");

termInput.addEventListener('focus', () => {
    const elem = document.getElementById("termInputContainer")
    elem.classList.add("focused");
})

termInput.addEventListener('blur', () => {
    const elem = document.getElementById("termInputContainer")
    elem.classList.remove("focused");
})

// Term input
const rateInput = document.getElementById("rate");

rateInput.addEventListener('focus', () => {
    const elem = document.getElementById("rateInputContainer")
    elem.classList.add("focused");
})

rateInput.addEventListener('blur', () => {
    const elem = document.getElementById("rateInputContainer")
    elem.classList.remove("focused");
})
