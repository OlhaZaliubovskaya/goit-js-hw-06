let input = document.getElementById('validation-input');

input.addEventListener("blur", validation);

function validation(event) {
    const validLength = Number(input.dataset.length);
    const currentLength = event.currentTarget.value.length;
    input.classList.remove("valid", "invalid");

    if (currentLength === validLength) {
        input.classList.add("valid");
        return
    }
    if (currentLength !== validLength) {
        input.classList.add("invalid")
    }
}
