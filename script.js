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

// Submit button
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function () {

    if(!amountInput.checkValidity()) {
        // invalid
        const elem = document.getElementById("amountInputContainer")
        elem.classList.add("error");
        const msg = document.getElementById("amountError")
        msg.style.display = "block";
    } else {
        // valid
        const elem = document.getElementById("amountInputContainer")
        elem.classList.remove("error");
        const msg = document.getElementById("amountError")
        msg.style.display = "none";

        const resultsSection = document.getElementById("results")
        resultsSection.style.display = "flex";
        const amountResult = document.getElementById("amountResult")
        amountResult.innerHTML = `<p>the amount input is: ${amountInput.value}</p>`
        const previewSection = document.getElementById("preview")
        previewSection.style.display = "none"
    }


  console.log(amountInput.name)
  console.log(amountInput.value)
});
