const amountInput = document.getElementById("amount");

amountInput.addEventListener('focus', () => {
    const elem = document.getElementById("amountInputContainer")
    elem.classList.add("focused");
})

amountInput.addEventListener('blur', () => {
    const elem = document.getElementById("amountInputContainer")
    elem.classList.remove("focused");
    // also validate
})
